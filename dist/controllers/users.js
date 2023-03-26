"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.addUsers = void 0;
const test_1 = require("../sequelize/test");
const addUsers = async (req, res) => {
    try {
        await test_1.sequelize.transaction(async (t) => {
            await test_1.User.bulkCreate(req.body, { transaction: t });
        });
        console.log("✅✅✅ Users Added Succesfully");
        res
            .status(201)
            .send("✅✅✅ Users Added Succesfully");
    }
    catch (error) {
        console.log("WASN'T Able to AddUsers ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to AddUsers ❌❌❌");
    }
};
exports.addUsers = addUsers;
const deleteUsers = async (req, res) => {
    try {
        await test_1.sequelize.transaction(async (t) => {
            for await (const data of req.body) {
                console.log(data);
                await test_1.User.destroy({
                    where: data
                });
            }
        });
        console.log("✅✅✅ Users Deleted Succesfully");
        res
            .status(202)
            .send("✅✅✅ Users Deleted Succesfully");
    }
    catch (error) {
        console.log("WASN'T Able to DeleteUsers ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to DeleteUsers ❌❌❌");
    }
};
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=users.js.map