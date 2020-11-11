import {BookRepository} from "../BookRepository";
import {BookEntity} from "../entities/BookEntity";

export class MockBookRepository implements BookRepository {

    async getBooks(): Promise<BookEntity[]> {
        return [
            new BookEntity('0', 'Le Petit Asticot', 'Jean Blonblon'),
            new BookEntity('1', 'Biote', 'Marc Siace')
        ];
    }
}