import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './Post.css'

const Post = ({ id, post }) => {
  return (
    <article className='p-2 rounded post text-dark'>
        <h3>{post.title}</h3>
        <div className='d-flex flex-wrap'>
        <div className='text-secondary font-monospace text fs-7 me-4'>
          Created: {post.created_at.toLocaleString('en-AU', {timeZone: 'Australia/Melbourne', hour12: false, dateStyle: "short", timeStyle: "short"})}    
        </div>
        <div className='text-secondary font-monospace text fs-7'>
          Modified: {post.modified_at.toLocaleString('en-AU', {timeZone: 'Australia/Melbourne', hour12: false, dateStyle: "short", timeStyle: "short"})}
        </div>
        </div>
        <ReactMarkdown children={post.text} className='text-wrap post-body' remarkPlugins={[remarkGfm]} />
    </article>
  )
}

export default Post