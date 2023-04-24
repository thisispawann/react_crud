import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app = express();
app.use(cors());

// connection with sql
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

// get data from students 
app.get('/', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error Appears on Server..."})
        return res.json(result);
    })
})

// run server
app.listen(8081, () => {
    console.log("Server Running")
})