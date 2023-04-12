import {Post, sequelize} from "../../sequelize/test"

const remove = async(req, res) => {
    const id  = req.params.id;
    try{
        await sequelize.transaction(async t => {
            await Post.destroy({where: {id: id}}, {transaction: t})
        })
        console.log("✅✅✅ Post Deleted Succesfully");
        res
            .status(202)
            .send("✅✅✅ Post Deleted Succesfully");
    }
    catch(error){
        console.log("WASN'T Able to DeletePost ❌❌❌", error);
        res
            .status(400)
            .send("WASN'T Able to DeletePost ❌❌❌");
    }
}

export default remove;