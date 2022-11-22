import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Post = ({ id, title, text }) => {
  return (
    <article className='border p-2 rounded '>
        <h3>{title}</h3>
        <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
    </article>
  )
}

export default Post