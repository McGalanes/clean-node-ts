import {Router} from "express";
import {BookController} from "../../presentation/controllers/book/BookController";
import {RouterAdapter} from "../../presentation/controllers/adapter/RouterAdapter";

export class BookRouter {
    constructor(
        private readonly router: Router,
        private readonly adapter: RouterAdapter,
        private readonly controller: BookController
    ) {
    }

    init() {
        const routes = this.router.use('/books')

        routes.route('/')
            .get(this.adapter.adaptRoute(() => this.controller.getBooks()))

    }
}