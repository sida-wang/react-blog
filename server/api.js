const express = require('express');
const app = express();
const port = 5000;
const pool = require("./db");

// get is a method that takes a get request with the first argument being a route, and the second argument being a 
// function which express calls a HANDLER
app.get('/', (req, res) => {
    res.send('Hello World! test woops')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//ROUTES

//Create Post
app.post("/posts", async(req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

//Read Post


//Update Post

//Delete Post

//Tags stuff