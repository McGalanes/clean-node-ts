import { GetBooksUseCase } from "./GetBooksUseCase";
import { BookEntity, BookRepository } from "../../../data/repositories/book";


describe('GetBooksUseCase', () => {

    it('should call Repository', () => {
        //GIVEN
        const repository: BookRepository = {
            getBooks: jest.fn()
        }
        const useCase = new GetBooksUseCase(repository)

        //WHEN
        useCase.execute()

        //THEN
        expect(repository.getBooks).toBeCalled()
    })

    it('should return data when success', async () => {
        //GIVEN
        const books = [
            new BookEntity("0", "Harry Potter 1", "JK Rowling"),
            new BookEntity("1", "Harry Potter 2", "JK Rowling")
        ]
        const repository: BookRepository = {
            getBooks: jest.fn().mockResolvedValueOnce(books)
        }
        const useCase = new GetBooksUseCase(repository)

        //WHEN
        const actual = await useCase.execute()

        //THEN
        expect(actual).toEqual(books)
    })

    it('should return error when fail', () => {
        //GIVEN
        const repository: BookRepository = {
            getBooks: jest.fn().mockRejectedValueOnce("error")
        }
        const useCase = new GetBooksUseCase(repository)

        //WHEN
        const actual = useCase.execute()

        //THEN
        expect(actual).rejects.toEqual("error")
    })
})