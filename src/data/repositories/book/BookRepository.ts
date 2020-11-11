import {BookEntity} from "./entities/BookEntity";

export interface BookRepository {
    getBooks(): Promise<BookEntity[]>
}