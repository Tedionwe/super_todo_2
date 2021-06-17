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
const fs_1 = __importDefault(require("fs"));
const fs = fs_1.default.promises;
const dbLocation = process.cwd() + "/database/";
class Database {
    constructor(name) {
        this.name = name;
        this.db_path = dbLocation + this.name + ".json";
        this.db = [];
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            fs_1.default.exists(this.db_path, (result) => __awaiter(this, void 0, void 0, function* () {
                if (result === false) {
                    yield fs.writeFile(this.db_path, JSON.stringify([]));
                }
                const data = yield fs.readFile(this.db_path, { encoding: 'utf-8' });
                if (!data)
                    return console.warn("No database found for " + this.name);
                this.db = JSON.parse(data);
            }));
        });
    }
    create(key, data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.db.push({ key, data: data });
            console.log(this.db.map(e => JSON.stringify(e)));
            yield fs.writeFile(this.db_path, JSON.stringify(this.db));
        });
    }
    read(key) {
        const data = this.db.find((i) => i.key === key);
        if (!data)
            return null;
        return data.data;
    }
    update(key, update) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = this.db.find((e) => e.key === key);
            if (!data)
                return console.error("no matching document for " + key);
            data = Object.assign(Object.assign({}, data), update);
            yield fs.writeFile(this.db_path, JSON.stringify(this.db));
        });
    }
    delete() {
    }
}
exports.default = Database;
