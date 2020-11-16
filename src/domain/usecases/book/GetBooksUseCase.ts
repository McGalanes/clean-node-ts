import { BookEntity, BookRepository } from "../../../data/repositories/book";

export class GetBooksUseCase {
    private repository: BookRepository

    constructor(repository: BookRepository) {
        this.repository = repository
    }

    async execute(): Promise<BookEntity[]> {
        return this.repository.getBooks()
    }
}