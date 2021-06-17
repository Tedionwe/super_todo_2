import express from "express";

import bodyParser from "body-parser";

import morgan from "morgan";
import TodoController from "./controller/todo";

const app = express();

app.use(morgan("dev"))

app.use(bodyParser.json());

app.use((req, res , next)=>{
  res.setHeader("Access-Control-Allow-origin", "*");
  next();
})

app.get("/", (req, res)=>{
    res.send({message:"welcome to our api", status:true})
})

app.post("/todo/add", TodoController.on_create)

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`server running at http://127.0.0.1:${PORT}`);
})
