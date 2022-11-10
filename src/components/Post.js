const Post = ({ title, text }) => {
  return (
    <article className='border p-2 rounded '>
        <h3>{title}</h3>
        <p>{text}</p>
    </article>
  )
}

export default Post