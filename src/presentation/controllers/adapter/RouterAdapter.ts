import { HttpRequest, HttpResponse } from "../../protocols/http";
import { Request, Response } from "express";

export interface RouterAdapter {
    adaptRoute(
        delegate: (httpRequest: HttpRequest) => Promise<HttpResponse>
    ): (request: Request, response: Response) => Promise<any>
}