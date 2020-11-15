import { Server } from "./server/Server";
import { createDependencyContainer } from "./injection/DependencyContainer";

export function init() {
    try {
        const dependencyContainer = createDependencyContainer()

        const server = new Server(dependencyContainer.routers.book)
        server.start(4000)
    } catch (e) {
        console.log('An error occurred while initializing application')
        console.log(e)
    }
}

init()