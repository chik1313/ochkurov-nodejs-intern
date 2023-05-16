"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
exports.userRouter = (0, express_1.default)();
exports.userRouter.post('/user', user_controller_1.default.createUser);
exports.userRouter.get('/user', user_controller_1.default.getUser);
exports.userRouter.get('/user/:id', user_controller_1.default.getOneUser);
exports.userRouter.put('/user', user_controller_1.default.updateUser);
exports.userRouter.delete('/user/:id', user_controller_1.default.deleteUser);
