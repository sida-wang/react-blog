import Post from './Post'
import { useEffect, useState } from 'react'

const Body = () => {

  const[posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/posts/fetch/all");
      const jsonData = await response.json();
      console.log(jsonData);
      setPosts(jsonData);
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
      {posts.map((post) => (<Post id={post.id} title={post.title} text={post.content} key={post.id} />))}  
    </main>
  )
}

export default Body