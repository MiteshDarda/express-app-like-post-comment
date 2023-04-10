import express  from "express"; 
import {test} from "../sequelize/test"

// Importing All Routes
import userRoutes from "../routes/users"
import commentRoutes from "../routes/comment"
import likeRoutes from "../routes/like"
import postRoutes from "../routes/post"

const jwt = require("jsonwebtoken");

const app = express();
const PORT = 8080

app.use(express.json()); // middleware to Pars data and get Body

async function init(){
    if( await test() ){
        console.log(`Starting Sequelize + Express example on port ${PORT}...`);
        app.listen(PORT, () => {
            console.log(); console.log(`✅ EXPRESS SERVER STARTED ON 🔗 http://localhost:${PORT} 🔗`)
        })
    }else{
        console.log("SERVER FAILURE ❌❌❌")
    }


}

init();


// Quick Get Request to check API
app.get('/', (req, res) => {
	res.send(`
        <h1> TESTING.... </h1>
		<h2>Hello, This App is Made By Mitesh Darda!</h2>
	`);
});

// testing middleware below

app.post('/signup', (req, res) => {
    const {email, password} = req.body;
	console.log(email, password);
    const token = jwt.sign(
        {email: email},
        "secret",
        { expiresIn: "1h" }
        );
    console.log(token);
    res.json({
        sucess: true,
        data : token
    })
});

const authFun = (req, res, next) => {
    const token = req.headers?.authorization.split(' ')[1];
    if(!token){
        res.sendStatus(400);
        return;
    }
    jwt.verify(token, "secret" as string, (err: any, email: any) => {
        if (err) return res.sendStatus(403)
        req.email = email;
        next();
      })
}

app.get('/getInfo', authFun, (req, res) => {
    console.log(req.email);
    res.send("GOOD");
})

// testing data above

// Routed API Requests
app.use('/v1', userRoutes);
app.use('/v1', commentRoutes);
app.use('/v1', likeRoutes);
app.use('/v1', postRoutes);



module.exports = app;