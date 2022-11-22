import Editor from "../components/Editor";
import { useNavigate, useParams, useLoaderData } from "react-router-dom";
import { updatePost } from "../util/apiCalls";
import TagSelection from "../components/TagSelection";
import { useState } from "react";

const EditPostLayout = () => {
    const params = useParams();
    const postsData = useLoaderData()['postData'][0];
    const navigate = useNavigate();
    const [selected, setSelected] = useState(useLoaderData()['selectedTags'].map((tag) => tag.id));
    const tags = useLoaderData()['tags']

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const body =  { id: params.id, title: e.target.title.value, slug: e.target.slug.value, markdown: e.target.markdown.value };
        const jsonData = await updatePost(params.id, body);
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