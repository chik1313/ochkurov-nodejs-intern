"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_routes_1 = require("./routes/contact.routes");
const user_routes_1 = require("./routes/user.routes");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', user_routes_1.userRouter);
app.use('/api', contact_routes_1.contactRouter);
app.listen(PORT, () => console.log(`server started on post ${PORT}`));
