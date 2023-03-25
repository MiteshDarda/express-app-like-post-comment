"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.addUsers = void 0;
const test_1 = require("../sequelize/test");
const addUsers = async (req, res) => {
    try {
        const user = await test_1.sequelize.transaction(async (t) => {
            await test_1.User.bulkCreate(req.body, { transaction: t });
        });
        console.log("✅✅✅ Users Added Succesfully");
        res.send("✅✅✅ Users Added Succesfully");
    }
    catch (error) {
        console.log("WASN'T Able to AddUsers ❌❌❌", error);
        res.send("WASN'T Able to AddUsers ❌❌❌");
    }
};
exports.addUsers = addUsers;
const deleteUsers = async (req, res) => {
    res.send("Deliting");
};
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=users.js.map