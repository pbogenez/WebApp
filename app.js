const express = require("express");
const mysql = require("mysql");

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();

// Connection to MySQL
const db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'password',
    database: 'app_db'
});


app.get("/", (req, res) => {

    // create database 
    db.query( 'CREATE DATABASE');
    
    // Use database
    db.query('USE app_db');

    // Create table USER
    db.query('CREATE TABLE USERS(id INT PRIMARY KEY NOT NULL, name VARCHAR(100), lastname VARCHAR(100), country VARCHAR(255))');

    // Insert Values into USER Table 
    db.query(`INSERT INTO USERS(id,name,lastname,country) 
              VALUES (1,"Paul","BOGENEZ","France")`);
    db.query(`INSERT INTO USERS(id,name,lastname,country) 
            VALUES (2,"Alex","BINDEL","France")`);
    db.query(`INSERT INTO USERS(id,name,lastname,country) 
            VALUES (3,"Pierre","ROULLEAUX","England")`);

    // Select Name of user 
    db.query('SELECT id FROM USERS limit 3',function(err,result,fields)  => {
        if (err) throw err;
        res.json("The user id is :"+result.id)
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);