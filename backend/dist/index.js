"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT || 3000;
const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Hello, World!' }));
};
const server = http_1.default.createServer(requestHandler);
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
