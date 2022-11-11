import Post from './Post'
import { useEffect, useState } from 'react'

const PostsContainer = () => {

  const[posts, setPosts] = useState([]);


  const getPosts = async () => {
    try {
      let fetchurl = "http://localhost:5000/posts/fetch/all";
      const response = await fetch(fetchurl);
      const jsonData = await response.json();
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

export default PostsContainer