import {BookRepository} from "../../../data/repositories/book/BookRepository";
import {BookEntity} from "../../../data/repositories/book/entities/BookEntity";

export default class GetBooksUseCase {
    constructor(private readonly repository: BookRepository) {}

    async execute(): Promise<BookEntity[]> {
        return this.repository.getBooks()
    }
}