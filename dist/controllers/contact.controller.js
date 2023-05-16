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
const db_1 = __importDefault(require("../db"));
class ContactController {
    createContactinfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, phone, userId } = req.body;
                if (!userId) {
                    res.status(400).json({ message: "Id не найден" });
                }
                const newPost = yield db_1.default.query(`INSERT INTO contact (email, phone, user_id) values ($1, $2, $3) RETURNING *`, [email, phone, userId]);
                res.json(newPost.rows[0]);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    getContactInfoByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.query.id;
                if (!id) {
                    res.status(400).json({ message: "Id не найден" });
                }
                const contacts = yield db_1.default.query(`select * from contact where user_id = $1`, [id]);
                res.json(contacts.rows);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.default = new ContactController();
