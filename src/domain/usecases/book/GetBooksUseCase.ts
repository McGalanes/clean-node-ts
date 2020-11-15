import { BookEntity, BookRepository } from "../../../data/repositories/book";

export class GetBooksUseCase implements IGetBooksUseCase {
    constructor(private readonly repository: BookRepository) {}

    async execute(): Promise<BookEntity[]> {
        return this.repository.getBooks()
    }
}

export interface IGetBooksUseCase {
    execute(): Promise<BookEntity[]>
}
