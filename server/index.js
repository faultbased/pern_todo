const express = require("express");
//calls express library and runs it
const app = express();
//calls cors middleware
const cors = require("cors");

//middleware
app.use(cors());
/*in a full-stack application,
we need to get data from the client-side; which 
is taken from a request.body object; request json
body in this case*/

//in order to create server/to jumpstart it
app.listen(5000, () => {
	//delivers msgs up confirmation of server connection
	console.log("Server is up and running on port 5000");
});