import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'

const Post = ({ id, title, text }) => {
  return (
    <Link to={"/posts/"+id}>
    <article className='border p-2 rounded '>
        
        <h3>{title}</h3>
        <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
        
    </article>
    </Link>
  )
}

export default Post