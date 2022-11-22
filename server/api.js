const express = require('express');
const app = express();
const port = 5000;
const pool = require("./db");
const cors = require("cors")

app.use(cors());
app.use(express.json()); //gives access to req.body

// get is a method that takes a get request with the first argument being a route, and the second argument being a 
// function which express calls a HANDLER
app.get('/', (req, res) => {
    res.send('Hello World! test woops');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//ROUTES

//Create Post
app.post("/posts/create", async(req, res) => {
    try {
        const { title:title, markdown: markdown, slug:slug } = req.body;
        const queryText = 'INSERT INTO posts (title, content, slug, created_at, modified_at) VALUES($1, $2, $3, to_timestamp($4), to_timestamp($5)) RETURNING *';
        const newPost = await pool.query(queryText, [title, markdown, slug, Date.now()/1000.0, Date.now()/1000.0]);
        res.json(newPost.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});


//Read All Posts
app.get("/posts/fetch/all", async(req, res) => {
    try {
        const queryText = 'SELECT * FROM posts';
        const queryres = await pool.query(queryText);
        res.json(queryres.rows);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});

//Read Post
app.get("/posts/fetch/:id", async(req, res) => {
    try {
        const { id: id } = req.params;
        const queryText = 'SELECT * FROM posts WHERE id = $1';
        const queryres = await pool.query(queryText, [id]);
        res.json(queryres.rows);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});


//Update Post
app.put("/posts/update/:id", async(req, res) => {
    try {
        const { id: id } = req.params;
        const { title: title, markdown: markdown, slug: slug } = req.body;
        const queryText = 'UPDATE posts SET (title, content, slug, modified_at) = (SELECT $1, $2, $3, to_timestamp($4)) WHERE id = $5 RETURNING *';
        const updatedPost = await pool.query(queryText, [title, markdown, slug, Date.now()/1000.0, id]);
        res.json(updatedPost.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});

//Delete Post
app.delete("/posts/delete/:id", async(req, res) => {
    try {
        const { id: id } = req.params;
        const queryText = 'DELETE FROM posts WHERE id = $1 RETURNING *';
        const deletedPost = await pool.query(queryText, [id]);
        res.json(deletedPost.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});

//Tags stuff
//Create Tag
app.post("/tags/create", async(req, res) => {
    try {
        console.log(req.body);
        const { title:title, metatitle: metatitle, slug:slug } = req.body;
        const queryText = 'INSERT INTO tags (title, meta_title, slug) VALUES($1, $2, $3) RETURNING *';
        const newTag = await pool.query(queryText, [title, metatitle, slug]);
        res.json(newTag.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});

//Get Tags
app.get("/tags/fetch", async(req, res) => {
    try {
        const tags = await pool.query("SELECT * FROM tags");
        res.json(tags.rows);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
})

//Get Tags by id
app.get("/tags/fetch/:id", async(req, res) => {
    try {
        const { id: id } = req.params;
        const tags = await pool.query("SELECT * FROM tags where id = $1", [id]);
        res.json(tags.rows);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
})

//Update Tag
app.put("/tags/update/:id", async(req, res) => {
    try {
        const { id: id } = req.params;
        const { title: title, metatitle: metatitle, slug: slug } = req.body;
        const queryText = 'UPDATE tags SET (title, meta_title, slug) = (SELECT $1, $2, $3) WHERE id = $4 RETURNING *';
        const updatedPost = await pool.query(queryText, [title, metatitle, slug, id]);
        res.json(updatedPost.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});