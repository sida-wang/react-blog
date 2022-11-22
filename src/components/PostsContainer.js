import Post from './Post'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PostsContainer = ({ postsData, type }) => {

  const [posts, setPosts] = useState(postsData.sort((a,b) => b.created_at - a.created_at));
  // const [sortProperty, setSortProperty] = useState("created_at");
  // const [sortAsc, setSortAsc] = useState(false);

//useEffect only takes in functions which it will run everytime something renders
//therefore we need a function A that will fetch and update the state
//however the fetch function B is async and will return a promise
//so we will need to use an async function C to allow us to await the promise. 
//finally the function input to useEffect will be A which defines C and immediately calls it (an IIFE).
// C will call B and allow for the the value to be stored into the state. 
// Use loaders instead for React Router 6.4

  // useEffect(() => {
  //   (async () => {
  //   const jsonData = await getAllPosts();
  //   setPostsData(jsonData);
  // })();
  //   }
  // ,[]);
  if (type === "post") {
  return (
    <main>
      {posts.map((post) => (<Post id={post.id} title={post.title} text={post.content} key={post.id} />))}  
    </main>
  )
  }
  else {
    return (
      <main>
        {posts.map((post) => (<Link to={"/posts/"+post.id} className="text-decoration-none"><Post id={post.id} title={post.title} text={post.content} key={post.id} /></Link>))}  
      </main>
    )
  }
}


export default PostsContainer