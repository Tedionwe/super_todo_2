"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const todo_1 = __importDefault(require("./controller/todo"));
const app = express_1.default();
app.use(morgan_1.default("dev"));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-origin", "*");
    next();
});
app.get("/", (req, res) => {
    res.send({ message: "welcome to our api", status: true });
});
app.post("/todo/add", todo_1.default.on_create);
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server running at http://127.0.0.1:${PORT}`);
});
