import { Link } from 'react-router-dom';

const Actions = () => {
    return (
        <>
            <Link to={`new`} className = "btn btn-primary" role="button">New Post</Link>
        </>
    )
}

export default Actions