import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { deletePostById, deleteTagById } from '../util/apiCalls';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import './Actions.css'

const Actions = ({ type }) => {
    const contextData = useOutletContext();
    const token = contextData['token'];
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

    if (!token) {
        return
    }
    if (type === "post") {
        return (
            <div className='actions mb-4'>
                <Link to={`/newpost`} className = "btn btn-primary actions-item m-1 " role="button">New Post</Link>
                <Link to={`edit`} className = "btn actions-item m-1 btn-warning " role="button">Edit Post</Link>
                <Button className = "btn actions-item m-1 btn-secondary " onClick={onDeletePost}>Delete Post</Button>
            </div>
        )
    }
    if (type === "tag") {
        return (
            <div className='actions mb-4'>
                <Link to={`/newtag`} className = "btn btn-primary actions-item m-1" role="button">New Tag</Link>
                <Link to={`edit`} className = "btn actions-item m-1 btn-warning" role="button">Edit Tag</Link>
                <Button className = "btn actions-item m-1 btn-secondary" onClick={onDeleteTag}>Delete Tag</Button>
            </div>
        )
    }
    return (
        <div className='actions mb-4'>
            <Link to={`newpost`} className = "btn btn-primary actions-item m-1 " role="button">New Post</Link>
            <Link to={`newtag`} className = "btn btn-primary actions-item m-1 " role="button">New Tag</Link>
        </div>
    )
    
}

export default Actions