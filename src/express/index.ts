import express  from "express"; 
import {test} from "../sequelize/test"

// Importing All Routes
import userRoutes from "../routes/users"
import commentRoutes from "../routes/comment"
import likeRoutes from "../routes/like"
import postRoutes from "../routes/post"


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

// Routed API Requests
app.use('/app', userRoutes);
app.use('/app', commentRoutes);
app.use('/app', likeRoutes);
app.use('/app', postRoutes);



module.exports = app;