const jwt = require("jsonwebtoken");

const auth = async(req, res, next) => {
    const token = req?.headers?.authorization?.split(' ')[1];
    if(!token){
        res.sendStatus(400);
        return;
    }
    jwt.verify(token, "SECRET" as string, (err: any, info: any) => {
        if (err) return res.sendStatus(403);
        req.email = info.email;
        req.userId = info.user_id;
        if(!info.email || !info.user_id){
            res
                .status(401)
                .send("Unauthorized: User Not Recognized")
        }
        next();
      })
}

export default auth;