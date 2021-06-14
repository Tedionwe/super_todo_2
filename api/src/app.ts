import express from "express";

import bodyParser from "body-parser";

import morgan from "morgan";

const app = express();

app.use(morgan("dev"))

app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.send({message:"welcome to our api", status:true})
})

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`server running at http://127.0.0.1:${PORT}`);
})
