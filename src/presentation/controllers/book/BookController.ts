import { GetBooksUseCase } from "../../../domain/usecases/book";
import { HttpResponse } from "../../protocols/http";

export class BookController {
    constructor(private readonly getBooksUseCase: GetBooksUseCase) {}

    async getBooks(): Promise<HttpResponse> {
        try {
            const books = await this.getBooksUseCase.execute()
            return HttpResponse.ok(books)
        } catch (error) {
            return HttpResponse.serverError()
        }
    }
}