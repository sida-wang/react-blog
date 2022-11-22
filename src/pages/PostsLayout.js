import Filter from '../components/Filter'
import Actions from '../components/Actions'
import PostsContainer from '../components/PostsContainer'
import { useLoaderData } from 'react-router-dom'

const PostsLayout = ({ type }) => {

  const postsData = useLoaderData()['posts'].map((post) => Object.assign(post,{created_at: new Date(post.created_at), modified_at: new Date(post.modified_at)}));
  const filters = useLoaderData()['filters']
  console.log(filters);

  return (
    <>
    <Filter filters = {filters} />
    <Actions type={ type }/>
    <PostsContainer postsData={ postsData } type={type} />
    </>
  )
}

export default PostsLayout