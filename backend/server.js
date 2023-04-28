import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

// connection with sql
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

// get data from student 
app.get('/', (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error Appears on Server..."})
        return res.json(result);
    })
})

// post api
app.post('/employee', (req, res) => {
    const sql = "INSERT INTO employee (`Name`, `Email`) VALUES(?) ";
    console.log(req.body)
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

// run server
app.listen(8081, () => {
    console.log("Server Running")
})