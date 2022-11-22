import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './Filter.css'
import { getTagsAll } from '../util/apiCalls'
import { useState, useEffect } from 'react'

const Filter = () => {

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    (async () => {
      const jsonData = await getTagsAll();
      setFilters(jsonData);
      })();
    }
  ,[]);

  return (
    <div className='Filter'>
        {filters.map((tag) => (<Link to={`/tags/${tag.id}`} key={tag.id} role="button" className="btn btn-secondary">{tag.title}</Link>))}  
    </div>
  )
}

export default Filter