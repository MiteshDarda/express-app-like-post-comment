import { User, sequelize } from "../sequelize/test";

const addUsers = async(req, res) => {
    try{
        const user =  await sequelize.transaction( async (t) => {
            await User.bulkCreate(req.body, {transaction: t});
        })
        console.log("✅✅✅ Users Added Succesfully")
        res.send("✅✅✅ Users Added Succesfully");
    }
    catch(error){
        console.log("WASN'T Able to AddUsers ❌❌❌", error);
        res.send("WASN'T Able to AddUsers ❌❌❌")
    }
}

const deleteUsers = async(req, res) => {
    res.send("Deliting");
}


export {addUsers, deleteUsers};