"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, morgan_1.default)('common'));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({
        message: 'Home',
    });
});
app.use((_req, res) => {
    res.status(404).json({
        message: 'this reote is not found plz respest the api route',
    });
});
app.listen(port, () => {
    console.log(`running server at port ${port}`);
});
exports.default = app;
