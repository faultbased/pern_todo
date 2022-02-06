const express = require("express");

//calls express library and runs it
const app = express();

//calls cors middleware
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req. body

/*in a full-stack application,
we need to get data from the client-side; which 
is taken from a request.body object; request json
body in this case*/

//routes//

//create a todo
app.post("/todos", async (req, res) => {
	try {
		const { description } = req.body;
		const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1)", [description]
		);

		res.json(newTodo);
	} catch (err) {
		console.error(err.message);
	}

});

//get all todos

//update a todo

//delete a todo


//in order to create server/to jumpstart it
app.listen(5000, () => {

//delivers msgs up confirmation of server connection
	console.log("Server is up and running on port 5000");
});