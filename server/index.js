const express = require("express");

// calls express library and runs it
const app = express();

// calls cors middleware
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); // req. body

/* in a full-stack application,
we need to get data from the client-side; which
is taken from a request.body object; request json
body in this case */

// routes//

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo

app.get("/todos/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE uid = $1", [uid]);

    res.json(todo.rows[0]);
    // calls upon uid variable
    console.log(req.params);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo

app.put("/todos/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE uid = $2",
      [description, uid]
    );
    res.json("Todo was successfully updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a todo

// in order to create server/to jumpstart it
app.listen(5000, () => {
  // delivers msgs up confirmation of server connection
  console.log("Server is up and running on port 5000");
});
