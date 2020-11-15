import {IGetBooksUseCase} from "../../../domain/usecases/book/GetBooksUseCase";
import {BookController} from "./BookController";
import {BookEntity} from "../../../data/repositories/book/entities/BookEntity";
import {HttpResponse} from "../../protocols/http/HttpResponse";

describe('BookController', () => {

    describe('getBooks', () => {

        it('should call getBooksUseCase', () => {
            //GIVEN
            const getBooksUseCase: IGetBooksUseCase = {
                execute: jest.fn()
            }
            const controller = new BookController(getBooksUseCase)

            //WHEN
            controller.getBooks()

            //THEN
            expect(getBooksUseCase.execute).toBeCalled()
        })

        it('should return HTTP 200 with filled data collection when success', async () => {
            //GIVEN
            const books = [
                new BookEntity("0", "Harry Potter 1", "JK Rowling"),
                new BookEntity("1", "Harry Potter 2", "JK Rowling")
            ]
            const getBooksUseCase: IGetBooksUseCase = {
                execute: jest.fn().mockResolvedValue(books)
            }
            const controller = new BookController(getBooksUseCase)

            //WHEN
            const actual = await controller.getBooks()

            //THEN
            expect(actual).toEqual(HttpResponse.ok(books))
        })

        it('should return HTTP 200 with empty data collection when success', async () => {
            //GIVEN
            const getBooksUseCase: IGetBooksUseCase = {
                execute: jest.fn().mockResolvedValue([])
            }
            const controller = new BookController(getBooksUseCase)

            //WHEN
            const actual = await controller.getBooks()

            //THEN
            expect(actual).toEqual(HttpResponse.ok([]))
        })

        it('should return HTTP 500 when fail', async () => {
            //GIVEN
            const getBooksUseCase: IGetBooksUseCase = {
                execute: jest.fn().mockRejectedValue("error")
            }
            const controller = new BookController(getBooksUseCase)

            //WHEN
            const actual = await controller.getBooks()

            //THEN
            expect(actual).toEqual(HttpResponse.serverError())
        })
    })
})