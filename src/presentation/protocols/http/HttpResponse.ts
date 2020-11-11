export class HttpResponse {
    constructor(
        readonly statusCode: number,
        readonly body: any
    ) {}

    // Success
    static ok = (data: any): HttpResponse => new HttpResponse(200, data);
    static accepted = (data: any): HttpResponse => new HttpResponse(202, null);
    static noContent = (): HttpResponse => new HttpResponse(204, null);

    // Fail
    static serverError = (): HttpResponse => new HttpResponse(500, Error('Internal server error'))
}