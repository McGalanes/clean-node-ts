import { BookEntity, BookRepository } from "../../../data/repositories/book";

export class GetBooksUseCase {
    constructor(private readonly repository: BookRepository) {}

    async execute(): Promise<BookEntity[]> {
        return this.repository.getBooks()
    }
}