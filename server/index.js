const express = require('express');

const mysql = require('mysql2');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'test',
    password: '123456',
    database:'lib_sys'
});

/*app.post("/", (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    
    db.query(
        "SELECT id, password FROM member where id =? AND password =?",
        [id, password],
        (err,result) => {
            if (err) {
                res.send({err:err});
            }

            if (result !== null) {
                res.send(result);
            } else {
                res.send({message: "Wrong information!"});
            }
        }
    )
})*/

//Check connect
/*app.get("/api/test",(req, res)=> {
    const sqlInsert = "INSERT INTO member (id, name, email, password) VALUES (?,?,?,?) ";
    const { id, name, email, password } = req.body;
    db.query(sqlInsert, [id, name, email, password ], (err, result) => {
        console.log("error", err);
        console.log("result", result);

    })
})*/
app.get("/api/post", (req,res) => {
    const sqlSel = "SELECT * FROM member";
    db.query(sqlSel, (err, result) => {
        res.send(result);

    })
})

//login
app.post("/api/post",(req, res) => {
    const {id, password} = req.body;
    console.log(id, password);  //Check value of id, password
    
    const sqlSel = `SELECT id, password FROM member WHERE id=${id} and password="${password}"`;
    console.log(sqlSel);    //Check SQL query
    db.query(sqlSel, (err, result) => {
        if(result.length > 0) {
            console.log(result);
            res.send(result);
        } else {
            console.log({message: 'wrong!'});
            res.send({message: 'wrong!'});
        }
        
    })
})

//passchange
app.post("/api/check",(req, res) => {
    const {id, email} = req.body;
    console.log(id, email);  //Check value of id, password
    
    const sqlSel = `SELECT id, email FROM member WHERE id=${id} and email="${email}"`;
    console.log(sqlSel);    //Check SQL query
    db.query(sqlSel, (err, result) => {
        if(result.length > 0) {
            console.log(result);
            res.send(result);
        } else {
            console.log({message: 'wrong!'});
            res.send({message: 'wrong!'});
        }
        
    })
})


app.listen(3001, () => {
    console.log("Listening from server 3001");
});