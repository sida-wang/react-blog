import Editor from "../components/Editor";
import { useNavigate, useParams, useLoaderData } from "react-router-dom";
import { updatePost, updatePostTags } from "../util/apiCalls";
import TagSelection from "../components/TagSelection";
import { useState } from "react";
import { useAuth } from "../App";


const EditPostLayout = () => {
    const token = useAuth()['token'];
    const navigate = useNavigate();
    const params = useParams();
    const postsData = useLoaderData()['postData'][0];
    
    const originalTags = useLoaderData()['selectedTags'].map((tag) => tag.id);
    const [selected, setSelected] = useState(useLoaderData()['selectedTags'].map((tag) => tag.id));
    const tags = useLoaderData()['tags']
    

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const tagUpdateData = { original: originalTags, newtags: selected};
        await updatePostTags(token, params.id, tagUpdateData);
        const postBody =  { id: params.id, title: e.target.title.value, slug: e.target.slug.value, markdown: e.target.markdown.value };
        const jsonData = await updatePost(token, params.id, postBody);    
        navigate(`/posts/${jsonData.id}`);
    }

  return (
    <>
        <TagSelection tags={tags} selected={selected} setSelected={setSelected} />
        <Editor defaultFormData={postsData} onSubmitHandler={onSubmitHandler} type="post"/>
    </>
  )
}

export default EditPostLayout