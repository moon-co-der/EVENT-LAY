import express from "express"
import dotenv from "dotenv"
dotenv.config();
import app from "./app.js"
import connectDB from "./config/db.js"

const port = process.env.PORT;

await connectDB();

app.listen(5000, ()=> {
    console.log("Server is live");
});

app.get('/', (res,req) => {
    res.send("server here")
})

