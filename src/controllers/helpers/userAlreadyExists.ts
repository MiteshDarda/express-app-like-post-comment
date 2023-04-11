
const userAlreadyExists = async (User, email, sequelize) => {
    let ifUser;
    try {
        await sequelize.transaction( async (t) => {
            ifUser = await User.findOne({where: {email: email}}, {transaction: t});
            console.log(ifUser);
        })
        
    }
    catch(error){
        console.log("Error in userAlreadyExists");
        return true;
    }
    await console.log(ifUser);
    if (ifUser === null){
        console.log("In");
        return false;
    }
    return true;
}

export default userAlreadyExists;