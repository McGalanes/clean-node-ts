import { ExpressRouterAdapter, RouterAdapter } from "../presentation/controllers/adapter";
import { BookRouter } from "../routes";
import { BookController } from "../presentation/controllers";
import { BookRepository, MockBookRepository } from "../data/repositories/book";
import { GetBooksUseCase } from "../domain/usecases/book";

export interface DependencyContainer {
    routerAdapter: RouterAdapter

    repositories: {
        book: BookRepository
    }

    useCases: {
        book: {
            getBooks: GetBooksUseCase
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