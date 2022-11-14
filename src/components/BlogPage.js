import Post from './Post'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const BlogPage = ( { all=true }) => {

  const[posts, setPosts] = useState([]);

  const params = useParams();

  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      let fetchurl = `http://localhost:5000/posts/fetch/${params.id}`;
      const response = await fetch(fetchurl);
      const jsonData = await response.json();
      setPosts(jsonData);
    }
    catch (err) {
      console.log(err);
    }
  }

  const delPost = async () => {
    try {
      let fetchurl = `http://localhost:5000/posts/delete/${params.id}`;
      const response = await fetch(fetchurl, {
        method: "DELETE"
      });
      const jsonData = await response.json();
      navigate('/');
    }
    catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getPosts();
  }, []);
  

  return (
    <main>
      <Link to={"edit"}><Button className = "btn btn-warning">Edit Post</Button></Link>
      <Button className = "btn btn-danger" onClick={delPost}>Delete Post</Button>
      {posts.map((post) => (<Post id={post.id} title={post.title} text={post.content} key={post.id} />))}  
    </main>
  )
}

export default BlogPage