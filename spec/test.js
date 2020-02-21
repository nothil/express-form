const axios = require("axios");
const fixture = require('./fixture');

describe("Server", () => {
    var html;
    beforeAll(() => {
        
    });
    
    describe("GET /new_visitor", () => {
        var data = {};
        beforeAll((done) => {
          
            axios.get("http://127.0.0.1:8080/new-visitor", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        
    });
    describe("GET /action", () => {
        var data = {};
        beforeAll((done) => {
            axios.post("http://localhost:3000/action", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body.message).toBe("This is an error response");
        });
    });

    
    
});