import Filter from '../components/Filter'
import Actions from '../components/Actions'
import PostsContainer from '../components/PostsContainer'
import { useLoaderData } from 'react-router-dom'

const PostsLayout = ({ type }) => {

  const postsData = useLoaderData().map((post) => Object.assign(post,{created_at: new Date(post.created_at), modified_at: new Date(post.modified_at)}));


  return (
    <>
    <Filter />
    <Actions type={ type }/>
    <PostsContainer postsData={ postsData } />
    </>
  )
}

export default PostsLayout