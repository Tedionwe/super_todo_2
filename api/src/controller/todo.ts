import { Request, Response } from "express";
import Todo from "../modules/todo";

export default class TodoController{

  static async on_create(req:Request,res:Response){

       const todo = await Todo.createTodo(req.body);

       res.status(201).send({
           message:{
            "message": "todo created successfully",
            "code": 201,
            "status": true,
            "data": todo
           }
        })
  }

  static on_delete (req:Request,res:Response){

    const todo = Todo.createTodo(req.body);
    
    res.status(201).send({message:"todo deleted successfully", data: todo.toJson})
    
}


}