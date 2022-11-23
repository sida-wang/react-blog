import Filter from '../components/Filter'
import Actions from '../components/Actions'
import PostsContainer from '../components/PostsContainer'
import { useLoaderData, useOutletContext } from 'react-router-dom'
import './PostsLayout.css'

const PostsLayout = ({ type }) => {
  const contextData = useOutletContext();
  const user = contextData['user'];

  const postsData = useLoaderData()['posts'].map((post) => Object.assign(post,{created_at: new Date(post.created_at), modified_at: new Date(post.modified_at)}));
  const filters = useLoaderData()['filters']
  
  return (
    <>
    <div className='sidebar'>
      <Actions type={ type }/>
      <Filter filters = {filters} />
    </div>
    <PostsContainer postsData={ postsData } type={type} />
    <div></div>
    </>
  )
}

export default PostsLayout