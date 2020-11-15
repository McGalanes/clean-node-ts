import express, { Express, Router } from 'express'
import { BookRouter } from "../routes/book/BookRouter";

export class Server {
    constructor(private readonly bookRouter: BookRouter) {}

    start(port: number) {
        const app = express()

        this.initApiRouters(app)

        app.listen(port, () => {
            console.log('Server started (port:%s)', port)
        })
    }

    private initApiRouters(app: Express) {
        const router = Router()
        app.use('/api', router)

        this.bookRouter.init(router)
    }
}