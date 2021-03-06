const dotenv = require('dotenv').config();
const Pool = require("pg").Pool;
const pool = new Pool();

pool.connect((err,res)=>{
	if(err){
		console.log(err)
	}console.log(res);
});


const createTable = async () => {
    try{
       const query = await pool.query(
          `CREATE TABLE IF NOT EXISTS
           VISITORS(
           ID  SERIAL PRIMARY KEY,
           visitor_name VARCHAR(200),
           visitors_age  INT,
           date_of_visit  DATE,
           time_of_visit  TIME,
           assistant_name VARCHAR(60),
           comments        VARCHAR(200)

          );`
      )
       console.log(query.rows)
       console.log('table created successful')

    }catch(e) {
        
        console.log(e);

    }
}

const addNewVisitor = async (name, age, date, time, assistant, comment) => {
    try{
       const query = await pool.query(
          'INSERT INTO VISITORS(visitor_name,visitors_age,date_of_visit,time_of_visit,assistant_name,comments) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
            [name,age,date,time,assistant,comment]       
      )
      console.log(query.rows[0].id)
       return query.rows[0].id;
       
       
    }catch(e) {
        console.log(e);

    };
};

const viewVisitor = async () => {
    try{
       const query = await pool.query(
          `
            SELECT * FROM VISITORS WHERE ID=${3}
          ;`
      )
       console.log(query.rows)
       console.log('viewed successfully')

    }catch(e) {
        console.log(e);

    };
};


const deleteVisitor = async (id) => {
    try{
        const query = await pool.query(
            `
          DELETE  FROM VISITORS WHERE id = ${id}
          ;`
        )

        console.log(query)
        console.log('deleted successfully')

        return query;

    }catch(e) {
        console.log(e);

    };
};


const listVisitor = async () => {
    try{
        const query = await pool.query(
            `
            SELECT * FROM VISITORS;`

        )
        console.log(query.rows)
        console.log('successfully')
        return query.rows;

    }catch(e) {
        console.log(e);

    };
};

module.exports = {addNewVisitor, createTable, viewVisitor, listVisitor, deleteVisitor};