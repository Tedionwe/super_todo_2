"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databases_1 = __importDefault(require("./databases"));
const userDb = new databases_1.default("todo");
class Todo {
    constructor(id, title, dueAt) {
        this.id = id;
        this.title = title;
        this.dueAt = dueAt;
    }
    toJson() {
        return {
            id: this.id,
            title: this.title,
            dueAt: this.dueAt,
        };
    }
    static createTodo(json) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new Todo("", "", new Date());
            // ID
            let generatedId = Math.random().toString(36).substring(2);
            // Date
            var myDate = new Date();
            myDate.setHours(myDate.getHours() + 24);
            user.id = generatedId;
            user.title = json['title'];
            user.dueAt = myDate;
            yield userDb.create(user.id, user.toJson());
            return user;
        });
    }
}
exports.default = Todo;
