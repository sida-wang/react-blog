import Editor from "../components/Editor"
import { createTag } from "../util/apiCalls";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";

const NewTagLayout = () => {
    const token = useAuth()['token'];
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const body =  {title: e.target.title.value, slug: e.target.slug.value, metatitle: e.target.markdown.value };
        const jsonData = await createTag(token, body);
        navigate(`/tags/${jsonData.id}`);
    }

  return (
    <>
    <div></div>
    <Editor defaultFormData={{title: "", slug: "", content: ""}} onSubmitHandler={onSubmitHandler} type="tag"/>
    </>
  )
}

export default NewTagLayout