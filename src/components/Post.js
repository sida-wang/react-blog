import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './Post.css'

const Post = ({ id, title, text }) => {
  return (
    <article className='p-2 rounded post text-dark-grey'>
        <h3>{title}</h3>
        <ReactMarkdown children={text} className='text-wrap' remarkPlugins={[remarkGfm]} />
    </article>
  )
}

export default Post