import { User, sequelize } from "../sequelize/test";

const addUsers = async(req, res) => {
    try{
        await sequelize.transaction( async (t) => {
            await User.bulkCreate(req.body, {transaction: t});
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
            for await(const data of req.body){
                console.log(data);
                await User.destroy({
                    where: data
                }, {transaction: t});
            }
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