import {HttpResponse} from "./HttpResponse";

describe('HttpResponse', () => {

    describe('Success', () => {

        it('should be HTTP 200 OK', function () {
            //GIVEN
            const data = {foo: "siace"}

            //WHEN
            const actual = HttpResponse.ok(data)

            //THEN
            expect(actual.body).toEqual(data)
            expect(actual.statusCode).toEqual(200)
        });

        it('should be HTTP 202 Accepted', function () {
            //WHEN
            const actual = HttpResponse.accepted()

            //THEN
            expect(actual.statusCode).toEqual(202)
            expect(actual.body).toEqual(null)
        });

        it('should be HTTP 204 No Content', function () {
            //WHEN
            const actual = HttpResponse.noContent()

            //THEN
            expect(actual.statusCode).toEqual(204)
            expect(actual.body).toEqual(null)
        });
    })

    describe('Client Errors', () => {
        it('should be HTTP 404 Not Found', function () {
            //WHEN
            const actual = HttpResponse.notFound()

            //THEN
            expect(actual.statusCode).toEqual(404)
            expect(actual.body).toEqual(Error('Not found'))
        });
    })

    describe('Server Errors', () => {
        it('should be HTTP 500 Internal Server Error', function () {
            //WHEN
            const actual = HttpResponse.serverError()

            //THEN
            expect(actual.statusCode).toEqual(500)
            expect(actual.body).toEqual(Error('Internal server error'))
        });
    })
})