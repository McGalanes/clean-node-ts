import {Router} from "express";
import BookController from "../../presentation/controllers/book/BookController";
import {RouteAdapter} from "../../presentation/controllers/adapter/RouteAdapter";

export class BookRouter {
    constructor(
        private readonly router: Router,
        private readonly adapter: RouteAdapter,
        private readonly controller: BookController
    ) {
    }

    init() {
        const routes = this.router.use('/books')

        routes.route('/')
            .get(this.adapter.adaptRoute(() => this.controller.getBooks()))

    }
}