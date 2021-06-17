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
const todo_1 = __importDefault(require("../modules/todo"));
class TodoController {
    static on_create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield todo_1.default.createTodo(req.body);
            res.status(201).send({
                message: {
                    "message": "todo created successfully",
                    "code": 201,
                    "status": true,
                    "data": todo
                }
            });
        });
    }
    static on_delete(req, res) {
        const todo = todo_1.default.createTodo(req.body);
        res.status(201).send({ message: "todo deleted successfully", data: todo.toJson });
    }
}
exports.default = TodoController;
