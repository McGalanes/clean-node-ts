import { BookController } from "../../presentation/controllers/book/BookController";
import { RouterAdapter } from "../../presentation/controllers/adapter/RouterAdapter";
import { Router } from "express";

export class BookRouter {
    constructor(
        private readonly adapter: RouterAdapter,
        private readonly controller: BookController
    ) {}

    init(router: Router) {
        router.get('/v1/books', this.adapter.adaptRoute(() => this.controller.getBooks()))
    }
}