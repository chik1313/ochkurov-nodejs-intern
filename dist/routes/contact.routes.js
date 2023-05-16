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
exports.userRouter = exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const contact_controller_1 = __importDefault(require("../controllers/contact.controller"));
const emailValidation = (0, express_validator_1.body)('email').trim().isEmail().isLength({ min: 1, max: 100 });
const phoneValidation = (0, express_validator_1.body)('phone').isString().custom((value) => __awaiter(void 0, void 0, void 0, function* () {
    if (value.includes('+380')) {
        return true;
    }
    throw new Error('incorrect number');
}));
exports.contactRouter = (0, express_1.default)();
exports.contactRouter.post('/contact', emailValidation, phoneValidation, contact_controller_1.default.createContactinfo);
exports.contactRouter.get('/contact', contact_controller_1.default.getContactInfoByUser);
class userRouter {
}
exports.userRouter = userRouter;
