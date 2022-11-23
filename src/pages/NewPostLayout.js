import Editor from "../components/Editor"
import { createPost, updatePostTags, checkToken } from "../util/apiCalls";
import { useNavigate, useLoaderData } from "react-router-dom";
import TagSelection from "../components/TagSelection"
import { useState } from "react";

const NewPostLayout = () => {
    const navigate = useNavigate();
    const tags = useLoaderData()['tags'];
    const [selected, setSelected] = useState([]);
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const body =  {title: e.target.title.value, slug: e.target.slug.value, markdown: e.target.markdown.value };
        const jsonData = await createPost(body);
        const tagUpdateData = { original: [], newtags: selected};
        await updatePostTags(jsonData.id, tagUpdateData);
        navigate(`/posts/${jsonData.id}`);
    }
    


      return (
        <>
        <TagSelection tags={tags} selected={selected} setSelected={setSelected} />
        <Editor defaultFormData={{title: "", slug: "", content: ""}} onSubmitHandler={onSubmitHandler} type="post" />
        </>
      )
}

export default NewPostLayout