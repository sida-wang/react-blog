import { Link } from 'react-router-dom'
import './Filter.css'

const Filter = ({ filters }) => {

  return (
    <>
    <h5 className='text-center'>Tags</h5>
    <div className='filter'>
        {filters.map((tag) => (<Link to={`/tags/${tag.id}`} key={tag.id} role="button" className="btn btn-secondary filter-item">{tag.title}</Link>))}  
    </div>
    </>
  )
}

export default Filter