import {HttpRequest} from "../../protocols/http/HttpRequest";
import {HttpResponse} from "../../protocols/http/HttpResponse";
import {Request, Response} from "express";

export interface RouterAdapter {
    adaptRoute(
        delegate: (httpRequest: HttpRequest) => Promise<HttpResponse>
    ): (request: Request, response: Response) => Promise<any>
}