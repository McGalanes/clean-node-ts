export class HttpResponse {
    constructor(
        readonly statusCode: number,
        readonly body: any
    ) {}

    // Success
    static ok = (data: any) => new HttpResponse(200, data);
    static accepted = () => new HttpResponse(202, null);
    static noContent = () => new HttpResponse(204, null);

    // Client Errors
    static notFound = () => new HttpResponse(404, Error('Not found'))

    // Server Errors
    static serverError = () => new HttpResponse(500, Error('Internal server error'))
}