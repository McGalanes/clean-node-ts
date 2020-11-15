import {BookRepository} from "../data/repositories/book/BookRepository";
import {GetBooksUseCase, IGetBooksUseCase} from "../domain/usecases/book/GetBooksUseCase";
import {RouterAdapter} from "../presentation/controllers/adapter/RouterAdapter";
import {BookRouter} from "../routes/book/BookRouter";
import {MockBookRepository} from "../data/repositories/book/mock/MockBookRepository";
import {ExpressRouterAdapter} from "../presentation/controllers/adapter/ExpressRouterAdapter";
import {BookController} from "../presentation/controllers/book/BookController";

export interface DependencyContainer {
    routerAdapter: RouterAdapter

    repositories: {
        book: BookRepository
    }

    useCases: {
        book: {
            getBooks: IGetBooksUseCase
        }
    }

    routers: {
        book: BookRouter
    }
}

export function createDependencyContainer(): DependencyContainer {
    const routerAdapter = new ExpressRouterAdapter()

    // Repositories
    const bookRepository = new MockBookRepository()

    // UseCases
    const getBooksUseCase = new GetBooksUseCase(bookRepository)

    // Controllers
    const bookController = new BookController((getBooksUseCase))

    return {
        routerAdapter: routerAdapter,
        repositories: {
            book: bookRepository
        },
        useCases: {
            book: {
                getBooks: getBooksUseCase
            }
        },
        routers: {
            book: new BookRouter(routerAdapter, bookController)
        }
    }
}