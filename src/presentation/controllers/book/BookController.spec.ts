import { GetBooksUseCase } from "../../../domain/usecases/book";
import { BookController } from "./BookController";
import { instance, mock, verify, when } from "ts-mockito";
import { BookEntity } from "../../../data/repositories/book";
import { HttpResponse } from "../../protocols/http";

describe('BookController', () => {

    describe('getBooks', () => {

        it('should call getBooksUseCase', () => {
            //GIVEN
            const mockedGetBooksUseCase = mock(GetBooksUseCase)
            const controller = new BookController(instance(mockedGetBooksUseCase))

            //WHEN
            controller.getBooks()

            //THEN
            verify(mockedGetBooksUseCase.execute()).called()
        })

        it('should return HTTP 200 with filled data collection when success', async () => {
            //GIVEN
            const books = [
                new BookEntity("0", "Harry Potter 1", "JK Rowling"),
                new BookEntity("1", "Harry Potter 2", "JK Rowling")
            ]
            const mockedGetBooksUseCase = mock(GetBooksUseCase)
            when(mockedGetBooksUseCase.execute()).thenResolve(books)
            const controller = new BookController(instance(mockedGetBooksUseCase))

            //WHEN
            const actual = await controller.getBooks()

            //THEN
            expect(actual).toEqual(HttpResponse.ok(books))
        })

        it('should return HTTP 200 with empty data collection when success', async () => {
            //GIVEN
            const mockedGetBooksUseCase = mock(GetBooksUseCase)
            when(mockedGetBooksUseCase.execute()).thenResolve([])
            const controller = new BookController(instance(mockedGetBooksUseCase))

            //WHEN
            const actual = await controller.getBooks()

            //THEN
            expect(actual).toEqual(HttpResponse.ok([]))
        })

        it('should return HTTP 500 when fail', async () => {
            //GIVEN
            const mockedGetBooksUseCase = mock(GetBooksUseCase)
            when(mockedGetBooksUseCase.execute()).thenReject()
            const controller = new BookController(instance(mockedGetBooksUseCase))

            //WHEN
            const actual = await controller.getBooks()

            //THEN
            expect(actual).toEqual(HttpResponse.serverError())
        })
    })
})