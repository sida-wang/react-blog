import Actions from '../components/Actions'
import PostsContainer from '../components/PostsContainer'
import { useLoaderData, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getTagsAll, getTagsById } from '../util/apiCalls'
import TagSummary from '../components/TagSummary'

const TagsLayout = ({ type="tag" }) => {

  const postData = useLoaderData().map((post) => Object.assign(post,{created_at: new Date(post.created_at), modified_at: new Date(post.modified_at)}));
  
  const params = useParams();

  const [tagData, setTagData] = useState([[]]);

  useEffect(() => {
    (async () => {
      const jsonData = await getTagsById(params.id);
      setTagData(jsonData);
      })();
      console.log(tagData)
    }
  ,[]);

  return (
    <>
    <Actions type={ type }/>
    <TagSummary body = {tagData[0]}/>
    <PostsContainer postsData={ postData } />
    </>
  )
}

export default TagsLayout