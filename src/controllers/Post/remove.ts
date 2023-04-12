import {Post, sequelize} from "../../sequelize/test"

const remove = async(req, res) => {
    const id  = req.params.id;
    const userId = req.userId;
    try{
        await sequelize.transaction(async t => {
            const post = await  Post.findByPk(id);
            if(post === null){
                res
                    .status(400)
                    .send("❌❌❌ WASN'T Able to DeletePost");
                return;
            }
            if(post.dataValues.UserId !== userId){
                res
                    .status(401)
                    .send("❌❌❌ Unauthorized");
                return;
            }
            await console.log(post.dataValues.UserId);
            await Post.destroy({where: {id: id}}, {transaction: t})
        })
        res
            .status(202)
            .send("✅✅✅ Post Deleted Succesfully");
    }
    catch(error){
        res
            .status(400)
            .send("❌❌❌ WASN'T Able to DeletePost");
    }
}

export default remove;