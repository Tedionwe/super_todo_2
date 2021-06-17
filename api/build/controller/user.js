"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../modules/user"));
class UserController {
    static on_login(req, res) {
        const user = user_1.default.fromJson(req.body);
        res.status(200).send({ message: " login successfully", data: user.toJson });
    }
    static on_register(req, res) {
        const user = user_1.default.fromJson(req.body);
        res.status(201).send({ message: " account created successfully", data: user.toJson });
    }
}
