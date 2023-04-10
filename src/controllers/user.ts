import { User, sequelize } from "../sequelize/test";

const addUsers = async(req, res) => {
    try{
        await sequelize.transaction( async (t) => {
            await User.create(req.body);
        })
        console.log("✅✅✅ Users Added Succesfully")
        res
            .status(201)
            .send("✅✅✅ Users Added Succesfully");
    }
    catch(error){
        console.log("WASN'T Able to AddUsers ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to AddUsers ❌❌❌");
    }
}

const deleteUsers = async(req, res) => {
    try{
        await sequelize.transaction(async t => {
                await User.destroy({
                    where: req.params
                }, {transaction: t});
        })
        console.log("✅✅✅ Users Deleted Succesfully");
        res
            .status(202)
            .send("✅✅✅ Users Deleted Succesfully");
    }
    catch(error){
        console.log("WASN'T Able to DeleteUsers ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to DeleteUsers ❌❌❌");
    }
}


export {addUsers, deleteUsers};