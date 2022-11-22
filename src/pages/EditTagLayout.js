import Editor from "../components/Editor";
import { useNavigate, useParams, useLoaderData } from "react-router-dom";
import { updateTag } from "../util/apiCalls";

const EditTagLayout = () => {
    const params = useParams();
    const tagData = useLoaderData()['tag'][0];
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const body =  {title: e.target.title.value, slug: e.target.slug.value, metatitle: e.target.markdown.value };
        const jsonData = await updateTag(params.id, body);
        navigate(`/tags/${jsonData.id}`);
    }

  return (
    <Editor defaultFormData={tagData} onSubmitHandler={onSubmitHandler} type="tag"/>
  )
}

export default EditTagLayout