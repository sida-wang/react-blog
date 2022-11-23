import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const TagSummary = ({ body }) => {
  return (
    <article className='border border-warning border-3 mb-4 p-2 rounded tag-summary'>
        <h3>{body.title}</h3>
        <ReactMarkdown className='pb-4' children={body.meta_title} remarkPlugins={[remarkGfm]} />
    </article>
  )
}

export default TagSummary