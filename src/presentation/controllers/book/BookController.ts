import GetBooksUseCase from "../../../domain/usecases/book/GetBooksUseCase";
import {HttpResponse} from "../../protocols/http/HttpResponse";

export class BookController {
    constructor(private readonly getBooksUseCase: GetBooksUseCase) {}

    async getBooks(): Promise<HttpResponse> {
        try {
            const books = await this.getBooksUseCase.execute()
            return books.length ? HttpResponse.ok(books) : HttpResponse.noContent()
        } catch (error) {
            return error
        }
    }
}