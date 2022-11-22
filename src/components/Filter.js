import { Link } from 'react-router-dom'
import './Filter.css'
import { getTagsAll } from '../util/apiCalls'
import { useState, useEffect } from 'react'

const Filter = ({ filters }) => {

  return (
    <div className='Filter'>
        {filters.map((tag) => (<Link to={`/tags/${tag.id}`} key={tag.id} role="button" className="btn btn-secondary">{tag.title}</Link>))}  
    </div>
  )
}

export default Filter