import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './Post.css'

const Post = ({ id, title, text }) => {
  return (
    <article className='p-2 rounded post text-dark'>
        <h3>{title}</h3>
        <ReactMarkdown children={text} className='text-wrap post-body' remarkPlugins={[remarkGfm]} />
    </article>
  )
}

export default Post