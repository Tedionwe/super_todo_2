"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserValidation {
    static on_login(req, res, next) {
        const { username, password } = req.body;
        if (!username)
            throw "username is required";
        if (!password)
            throw "password  is required";
        if (password.length < 6)
            throw "password must not be less than six(6) characters";
        next();
    }
    static on_register(req, res, next) {
        const { firstName, lastName, email, username, password } = req.body;
        if (!firstName)
            throw "first name is required";
        if (!lastName)
            throw "last name is required";
        if (!username)
            throw "username is required";
        if (!email)
            throw "email is required";
        if (!password)
            throw "password  is required";
        if (password.length < 6)
            throw "password must not be less than six(6) characters";
        next();
    }
}
