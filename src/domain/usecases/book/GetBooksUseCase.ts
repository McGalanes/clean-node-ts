import {BookRepository} from "../../../data/repositories/book/BookRepository";
import {BookEntity} from "../../../data/repositories/book/entities/BookEntity";

export class GetBooksUseCase implements IGetBooksUseCase {
    constructor(private readonly repository: BookRepository) {}

    async execute(): Promise<BookEntity[]> {
        return this.repository.getBooks()
    }
}

export interface IGetBooksUseCase {
    execute(): Promise<BookEntity[]>
}
