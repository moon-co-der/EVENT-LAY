import express from "express"
import dotenv from "dotenv"
dotenv.config();
import app from "./app.js"

const port = process.env.PORT;

app.listen(5000, ()=> {
    console.log("Server is live");
});

app.get('/', (res,req) => {
    res.send("server here")
})

