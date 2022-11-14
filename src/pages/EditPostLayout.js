import Editor from "../components/Editor";
import { useNavigate, useParams, useLoaderData } from "react-router-dom";
import { updatePost } from "../util/apiCalls";

const EditPostLayout = () => {
    const params = useParams();
    const postsData = useLoaderData()[0];
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const body =  { id: params.id, title: e.target.title.value, slug: e.target.slug.value, markdown: e.target.markdown.value };
        const jsonData = await updatePost(params.id, body);
        navigate(`/posts/${jsonData.id}`);
    }

  return (
    <Editor defaultFormData={postsData} onSubmitHandler={onSubmitHandler} type="post"/>
  )
}

export default EditPostLayout