import { json } from "body-parser";
import Database from "./databases";

const userDb = new Database("todo");

export default class Todo{
    id:string;
    title:string;
    dueAt:Date;

    constructor(id:string, title:string, dueAt:Date){
       this.id = id;
       this.title = title;
       this.dueAt = dueAt;
    }

    toJson(){
        return{
            id :this.id,
            title : this.title,
            dueAt : this.dueAt,
        }
    }

    static async createTodo(json:any){
        const user = new Todo("", "", new Date(),);

        // ID
        let generatedId = Math.random().toString(36).substring(2);

        // Date
        var myDate = new Date();
        myDate.setHours(myDate.getHours() + 24);

        user.id = generatedId;
        user.title = json['title'];
        user.dueAt = myDate;

        await userDb.create(user.id, user.toJson());

        return user;
    }

 
}


