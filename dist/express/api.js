"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("./index");
const api = async () => {
    await app.get('/', (req, res) => {
        res.send(`
        <h1> TESTING.... </h1>
		<h2>Hello, This App is Made By Mitesh Darda!</h2>
        `);
    });
};
exports.default = api;
//# sourceMappingURL=api.js.map