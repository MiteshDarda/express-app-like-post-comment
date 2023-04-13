const addLike = async(parent) => {
    parent.likes = parent.likes + 1;
    await parent.save();
}

const removeLike = async(parent) => {
    parent.likes = parent.likes - 1;
    await parent.save();
}

const addDislike = async(parent) => {
    parent.dislikes = parent.dislikes + 1;
    await parent.save();
}

const removeDislike = async(parent) => {
    parent.dislikes = parent.dislikes - 1;
    await parent.save();
}

export {addLike, addDislike, removeLike, removeDislike};