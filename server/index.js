const express = require('express');

const mysql = require('mysql2');

const cors = require('cors');

const dotenv = require('dotenv');

const app = express();
dotenv.config();

const nodeMailer = require("nodemailer");

app.use(express.urlencoded({extended: true}));
//app.use(bodyParser.json);

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'test',
    password: '123456',
    database:'lib_sys'
});

let idCheck;    //データベースにIDがあるかどうか確認

//register
app.post('/register', (req, res) => {
    const { id, password, name, nameKana, birthday, gender, email, phone, postCode, address, authorityCODE, regID } = req.body

    db.query('INSERT INTO member (id, name, name_kana, gender, birthday, email, phone, authority_CODE, password, postcode, address, reg_ID, reg_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,now())', [id, name, nameKana, gender, birthday, email, phone, authorityCODE, password, postCode, address, regID], (err, result) => {
        if (err) {
            res.send(err)
            console.log(err)
            console.log("Values Not Inserted")
        } else {
            res.send({ message: 'inserted' })
            console.log("Values Inserted")
        }
    })
})


//login
app.post("/api/post",(req, res) => {
    const {id, password} = req.body;
    console.log(id, password);  //Check value of id, password
    
    const sqlSel = `SELECT id, password, authority_CODE FROM member WHERE id=${id} and password="${password}"`;
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

//info check
app.post("/api/check",(req, res) => {
    const {id, email} = req.body;
    console.log(id, email);  //Check value of id, password

    idCheck = id;
    
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

//passcheck & change
app.post("/api/checkpass", (req, res) => {
        const password = req.body.password;
        console.log(password, idCheck);
        const checkPass = `SELECT id FROM member WHERE password="${password}"`;

    let checkPassId;
    db.query(checkPass, (err1, result1) => {
        console.log("get: " + result1.map((r)=> r.id)[0]);
        console.log(result1.length);            //Check result1's value
        checkPassId = result1.map((r)=> r.id)[0];
        console.log(checkPassId == idCheck);        //check conditional true or false
        let turn = checkPassId == idCheck;

        if(!turn) {
            const sqlChange = `UPDATE member SET password="${password}" WHERE id=${idCheck}`;
            db.query(sqlChange, (err,result) => {
                console.log(result);
                res.send({message:'change'})
            })
        } else {
            res.send({message: 'error'});
        }
    })
    
})

//passchange
/*app.post("/api/change", (req, res) => {
    const password = req.body.password;
    console.log(password, idCheck);

    
    const sqlChange = `UPDATE member SET password="${password}" WHERE id=${idCheck}`;
    db.query(sqlChange, (err,result) => {
        console.log(result);
        res.send({message: 'changed!'})
    })
*/

//Send mail
app.post('/api/email', ( req,res ) => {
    const link = "http://localhost:3000/info";
    let ID;

    const { name, email } = req.body;

    const sqlID = `SELECT id FROM member WHERE email="${email}"`;
    console.log(sqlID);
    db.query(sqlID, (err, result) => {
        //console.log(result.map((r)=> r.id)[0]);
        ID = result.map((r)=> r.id)[0];
    })

    //console.log(ID);

    nodeMailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Hi, ${name} </h3>
            <p> This is your ID Login: ${ID} </p>
            <p>Please click below link to reset your account</p>
            <a href="${link}">Click</a>

        `
        let mailerConfig = {    
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        };
        let transporter = nodeMailer.createTransport(mailerConfig);

        let mailOptions = {
            from: 'library@testemail.co',
            to: email,
            subject: 'RESET YOUR ACCOUNT',
            html: htmlEmail
        };

        if(!ID){
            res.send({message: "Wrong email!"})
        } else {
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    res.status(500).send({status: 'FAIL', msg: 'Internal error: email not sent'});
                } else {
                    res.status(200).json({status: 'OK', msg: 'Email sent'});
                    console.log('Message sent');
                }
            });
        }
    })
});

//manager page
app.get("/api/get", (req,res) => {

    const sqlSel = "SELECT id, name, birthday, email, phone FROM member WHERE show_flag=0";
    db.query(sqlSel, (err, result) => {
        res.send(result);
        console.log(result);
    })
})

//delete
app.delete("/api/remove/:id", (req,res) => {
    const { id } = req.params;
    console.log(id);
    const sqlRemove = `DELETE FROM member WHERE id in(${id}) `
    db.query(sqlRemove,(error, result) => {
        if(error) {
            console.log(error);
        }
    })
})

//hide
app.delete("/api/hide/:id", (req,res) => {
    const { id } = req.params;
    console.log(id);
    const sqlHide = `UPDATE member SET show_flag=1 WHERE id in (${id})`
    db.query(sqlHide,(error, result) => {
        if(error) {
            console.log(error);
        }
    })
})


app.listen(3001, () => {
    console.log("Listening from server 3001");
});

