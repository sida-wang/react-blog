import Filter from './Filter'
import Actions from './Actions'
import PostsContainer from './PostsContainer'
import { useLoaderData } from 'react-router-dom'

const PostsLayout = ({ isSinglePost=false }) => {

  const postsData = useLoaderData().map((post) => Object.assign(post,{created_at: new Date(post.created_at), modified_at: new Date(post.modified_at)}));

  

  return (
    <>
    <Filter />
    <Actions isSinglePost={ isSinglePost }/>
    <PostsContainer postsData={ postsData } />
    </>
  )
}

export default PostsLayout