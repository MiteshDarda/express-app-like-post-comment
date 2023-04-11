
const userAlreadyExists = async (User, email, sequelize) => {
    let ifUser;
    try {
        await sequelize.transaction( async (t) => {
            ifUser = await User.findOne({where: {email: email}}, {transaction: t});
        })
        
    }
    catch(error){
        console.log("Error in userAlreadyExists");
        return true;
    }
    await console.log(ifUser);
    if (ifUser === null){
        return false;
    }
    return ifUser;
}

export default userAlreadyExists;