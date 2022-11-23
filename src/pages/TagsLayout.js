import Actions from '../components/Actions'
import PostsContainer from '../components/PostsContainer'
import { useLoaderData} from 'react-router-dom'
import TagSummary from '../components/TagSummary'

const TagsLayout = ({ type="tag" }) => {
  const postData = useLoaderData()['postsData'].map((post) => Object.assign(post,{created_at: new Date(post.created_at), modified_at: new Date(post.modified_at)}));
  const tagData = useLoaderData()['tag'];
  
  return (
    <>
    <div className='sidebar'>
      <Actions type={ type }/>
    </div>
    <div>
    <TagSummary body = {tagData[0]}/>
    <h3 className='text-dark p-2'>Posts</h3>
    <PostsContainer postsData={ postData } />
    </div>
    </>
  )
}

export default TagsLayout