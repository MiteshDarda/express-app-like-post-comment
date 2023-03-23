"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_1 = __importDefault(require("../sequelize/test"));
const users_1 = __importDefault(require("../routes/users"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.json()); // middleware to Pars data and get Body
async function init() {
    await (0, test_1.default)();
    console.log(`Starting Sequelize + Express example on port ${PORT}...`);
    app.listen(PORT, () => {
        console.log();
        console.log(`✅ EXPRESS SERVER STARTED ON 🔗 http://localhost:${PORT} 🔗`);
    });
}
init();
app.get('/', (req, res) => {
    res.send(`
        <h1> TESTING.... </h1>
		<h2>Hello, This App is Made By Mitesh Darda!</h2>
	`);
});
app.use('/app', users_1.default);
module.exports = app;
//# sourceMappingURL=index.js.map