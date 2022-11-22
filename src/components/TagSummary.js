import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const TagSummary = ({ body }) => {
  return (
    <article className='border p-2 rounded '>
        <h3>{body.title}</h3>
        <ReactMarkdown children={body.meta_title} remarkPlugins={[remarkGfm]} />
    </article>
  )
}

export default TagSummary