export class HttpRequest {
    constructor(
        readonly body?: any,
        readonly headers?: any,
        readonly params?: any
    ) {}
}