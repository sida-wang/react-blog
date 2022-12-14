const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const pool = require("./db");
const cors = require("cors");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

//get config vars
dotenv.config();

app.use(cors({
            origin: ['http://localhost:3000', 'https://blog.sida.dev'],
            methods: ['GET', 'POST', 'PUT', 'DELETE']
}
));
app.use(express.json()); //gives access to req.body

app.listen(port, () => {
    console.log(`Blog API listening on port ${port}`);
});

//Useful functions
function difference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
      _difference.delete(elem);
    }
    return _difference;
  }

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET)
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        //console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}

//ROUTES

//Create Post
app.post("/posts/create", authenticateToken, async(req, res) => {
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

//Read Posts that match a given Tag ID
app.get("/posts/fetch/bytag/:id", async(req, res) => {
    try {
        const { id: id } = req.params;
        const queryText = 'SELECT p.* FROM posts p INNER JOIN post_tags pt on p.id = pt.post_id and pt.tag_id = $1';
        const queryres = await pool.query(queryText, [id]);
        res.json(queryres.rows);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});


//Update Post
app.put("/posts/update/:id", authenticateToken, async(req, res) => {
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
app.delete("/posts/delete/:id", authenticateToken, async(req, res) => {
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
app.post("/tags/create", authenticateToken, async(req, res) => {
    try {
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

//Get Tags by Post id
app.get("/tags/fetch/bypost/:id", async(req, res) => {
    try {
        const { id: id } = req.params;
        const queryText = 'SELECT t.* FROM tags t INNER JOIN post_tags pt on t.id = pt.tag_id and pt.post_id = $1';
        const queryres = await pool.query(queryText, [id]);
        res.json(queryres.rows);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
})


//Update Tag
app.put("/tags/update/:id", authenticateToken, async(req, res) => {
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


//Delete Tag
app.delete("/tags/delete/:id", authenticateToken, async(req, res) => {
    try {
        const { id: id } = req.params;
        const queryText = 'DELETE FROM tags WHERE id = $1 RETURNING *';
        const deletedPost = await pool.query(queryText, [id]);
        res.json(deletedPost.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});

//Link tag to post
app.post("/posts/linktags/:id", authenticateToken, async(req, res) => {
    try {
        const{ id:id } = req.params;
        const { original:original, newtags: newtags} = req.body;
        const toDel = difference(new Set(original), new Set(newtags));
        const toAdd = difference(new Set(newtags), new Set(original));
        for (tagid of toDel) {
            await pool.query('DELETE FROM post_tags WHERE post_id = $1 and tag_id = $2', [id, tagid]);
        }
        for (tagid of toAdd) {
            await pool.query('INSERT INTO post_tags (post_id, tag_id) VALUES($1, $2)', [id, tagid]);
        }
        res.json({added: Array.from(toAdd), deleted: Array.from(toDel)});
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});

app.post("/auth/login", async(req, res) => {
    try {
        const {password: password} = req.body;
        const queryText = "SELECT * FROM users WHERE username = 'sida' and password = crypt($1, password)"
        const jsonData = await pool.query(queryText, [password]);
        const user = await jsonData.rows[0];
        if (user) {
            res.json({result: "Success", token: generateAccessToken(user.username)});
        }
        else {
            res.json({result: "Incorrect password"});
        }
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});

app.get("/auth/check", authenticateToken, async(req, res) => {
    try {
        res.json({result: "Success"});
    } catch (err) {
        console.error(err.message);
        res.send(err.message);
    }
});