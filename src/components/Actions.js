import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { deletePostbyId } from '../util/apiCalls';
import { useParams, useNavigate } from 'react-router-dom';

const Actions = ({ isSinglePost }) => {

    const params = useParams(); 

    const navigate = useNavigate(); 

    const onDelete = async () => {
        await deletePostbyId(params.id);
        navigate('/');
    }

    if (isSinglePost) {
        return (
            <>
                <Link to={`/new`} className = "btn btn-primary" role="button">New Post</Link>
                <Link to={`edit`} className = "btn btn-warning" role="button">Edit Post</Link>
                <Button className = "btn btn-danger" onClick={onDelete}>Delete Post</Button>
            </>
        )
    }
    return (
        <>
            <Link to={`new`} className = "btn btn-primary" role="button">New Post</Link>
        </>
    )
    
}

export default Actions