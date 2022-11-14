import Editor from "../components/Editor"
import { createPost } from "../util/apiCalls";
import { useNavigate } from "react-router-dom";

const NewPostLayout = () => {
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const body =  {title: e.target.title.value, slug: e.target.slug.value, markdown: e.target.markdown.value };
        const jsonData = await createPost(body);
        console.log("posting!")
        navigate(`/posts/${jsonData.id}`);
    }


  return (
    <Editor defaultFormData={{title: "", slug: "", content: ""}} onSubmitHandler={onSubmitHandler} type="post" />
  )
}

export default NewPostLayout