import {HttpRequest} from "../../protocols/http/HttpRequest";
import {Request, Response} from "express";
import {HttpResponse} from "../../protocols/http/HttpResponse";

export class RouteAdapter {

    adaptRoute(delegate: (httpRequest: HttpRequest) => Promise<HttpResponse>) {
        return async (req: Request, res: Response) => {
            const httpRequest: HttpRequest = {
                body: req.body,
                params: req.params,
            }

            const httpResponse = await delegate(httpRequest)

            if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
                res.status(httpResponse.statusCode).json(httpResponse.body)
            } else {
                res.status(httpResponse.statusCode).json(
                    {
                        error: httpResponse.body.message
                    }
                )
            }
        }
    }
}