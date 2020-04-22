
describe('express form testing', ()=>{
    const axios = require('axios');
    const readline = require('readline');
    const fixture = require('./fixture')
    const { Pool } = require('pg')


    beforeEach(()=>{
        server = require('../src/routes')
      
        const pool = new Pool();
    });

    
    it('should return an html form', async (done)=>{
        try {
            const html = await axios.get("http://localhost:3000/new_Visitor")
            expect(html.data).toEqual(fixture)
        } catch (err) {
            console.log(err)
        }

        done()
    })

})


    