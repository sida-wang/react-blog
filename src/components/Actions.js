import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { deletePostById, deleteTagById } from '../util/apiCalls';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import DeleteModal from './DeleteModal'
import { useState } from 'react';
import './Actions.css'

const Actions = ({ type }) => {
    const token = useAuth()['token'];
    const params = useParams(); 
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate(); 

    const onDeletePost = async () => {
        await deletePostById(token, params.id);
        navigate('/');
    }

    const onDeleteTag = async () => {
        await deleteTagById(token, params.id);
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
                <Button className = "btn actions-item m-1 btn-secondary " onClick={() => setShowModal(true)}>Delete Post</Button>

                <DeleteModal showModal={showModal} setShowModal={setShowModal} onDelete={onDeletePost}/>
            </div>
        )
    }
    if (type === "tag") {
        return (
            <div className='actions mb-4'>
                <Link to={`/newtag`} className = "btn btn-primary actions-item m-1" role="button">New Tag</Link>
                <Link to={`edit`} className = "btn actions-item m-1 btn-warning" role="button">Edit Tag</Link>
                <Button className = "btn actions-item m-1 btn-secondary" onClick={() => setShowModal(true)}>Delete Tag</Button>

                <DeleteModal showModal={showModal} setShowModal={setShowModal} onDelete={onDeleteTag}/>
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