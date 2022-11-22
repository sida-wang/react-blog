import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { deletePostById, deleteTagById } from '../util/apiCalls';
import { useParams, useNavigate } from 'react-router-dom';

const Actions = ({ type }) => {

    const params = useParams(); 

    const navigate = useNavigate(); 

    const onDeletePost = async () => {
        await deletePostById(params.id);
        navigate('/');
    }

    const onDeleteTag = async () => {
        await deleteTagById(params.id);
        navigate('/');
    }

    if (type === "post") {
        return (
            <>
                <Link to={`/newpost`} className = "btn btn-primary" role="button">New Post</Link>
                <Link to={`edit`} className = "btn btn-warning" role="button">Edit Post</Link>
                <Button className = "btn btn-danger" onClick={onDeletePost}>Delete Post</Button>
            </>
        )
    }
    if (type === "tag") {
        return (
            <>
                <Link to={`/newtag`} className = "btn btn-primary" role="button">New Tag</Link>
                <Link to={`edit`} className = "btn btn-warning" role="button">Edit Tag</Link>
                <Button className = "btn btn-danger" onClick={onDeleteTag}>Delete Tag</Button>
            </>
        )
    }
    return (
        <>
            <Link to={`newpost`} className = "btn btn-primary" role="button">New Post</Link>
            <Link to={`newtag`} className = "btn btn-primary" role="button">New Tag</Link>
        </>
    )
    
}

export default Actions