import express  from "express"; 
import test from "../sequelize/test"
const app = express();
const PORT = 8080

app.use(express.json()); // middleware to Pars data and get Body

async function init(){
    await test();

    console.log(`Starting Sequelize + Express example on port ${PORT}...`);

    app.listen(PORT, () => {
        console.log(`✅ EXPRESS SERVER STARTED ON 🔗http://localhost:${PORT}`)
    })
}

init();

app.get('/', (req, res) => {
	res.send(`
        <h1> TESTING.... </h1>
		<h2>Hello, This App is Made By Mitesh Darda!</h2>
	`);
});


module.exports = app;