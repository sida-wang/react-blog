import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { deletePostById, deleteTagById } from '../util/apiCalls';
import { useParams, useNavigate } from 'react-router-dom';
import './Actions.css'

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
            <div className='actions'>
                <Link to={`/newpost`} className = "btn btn-primary bg-red actions-item m-1 border border-0" role="button">New Post</Link>
                <Link to={`edit`} className = "btn btn-warning actions-item m-1 bg-salmon border border-0" role="button">Edit Post</Link>
                <Button className = "btn btn-danger actions-item m-1 bg-grey border border-0" onClick={onDeletePost}>Delete Post</Button>
            </div>
        )
    }
    if (type === "tag") {
        return (
            <div className='actions'>
                <Link to={`/newtag`} className = "btn btn-primary bg-red actions-item m-1 border border-0" role="button">New Tag</Link>
                <Link to={`edit`} className = "btn btn-warning actions-item m-1 bg-salmon border border-0" role="button">Edit Tag</Link>
                <Button className = "btn btn-danger actions-item m-1 bg-grey border border-0" onClick={onDeleteTag}>Delete Tag</Button>
            </div>
        )
    }
    return (
        <div className='actions'>
            <Link to={`newpost`} className = "btn btn-primary bg-red actions-item m-1 border border-0" role="button">New Post</Link>
            <Link to={`newtag`} className = "btn btn-primary bg-red actions-item m-1 border border-0" role="button">New Tag</Link>
        </div>
    )
    
}

export default Actions