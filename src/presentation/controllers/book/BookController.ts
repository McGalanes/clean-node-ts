import {IGetBooksUseCase} from "../../../domain/usecases/book/GetBooksUseCase";
import {HttpResponse} from "../../protocols/http/HttpResponse";

export class BookController {
    constructor(private readonly getBooksUseCase: IGetBooksUseCase) {}

    async getBooks(): Promise<HttpResponse> {
        try {
            const books = await this.getBooksUseCase.execute()
            return HttpResponse.ok(books)
        } catch (error) {
            return HttpResponse.serverError()
        }
    }
}