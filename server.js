const express=require('express')
require('dotenv').config()
const mysql=require('mysql2')


const app=express()
const PORT=process.env.PORT || 3010
const db=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

db.connect(err=>{
    if(err){
        console.log('Database connection failed',err)
        return
    }else{
        console.log('Connected to DB')
    }
})

app.get('/',(req,res)=>{
    res.send('heyy there!')
})

app.listen(PORT,()=>{
    console.log(`Server connected to http://localhost:${PORT}`)
})