import express from 'express'

export default class Server {
    readonly port: number

    constructor(port: number) {
        this.port = port
    }

    start() {
        const app = express()
        //TODO
    }
}