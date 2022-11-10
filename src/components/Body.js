import Post from './Post'
import { Route, Routes } from 'react-router-dom'

const posts = [
  {
    id: 1,
    tags: ["tag1", "tag2"],
    title: "Title",
    text: "Blah Blah Blah",
    date_created: "Date 1",
    date_modified: "Date 2",
  },
  {
    id: 2,
    tags: ["tag1", "tag2"],
    title: "Title",
    text: "text body",
    date_created: "Date 1",
    date_modified: "Date 2",
  },
  {
    id: 3,
    tags: ["tag1", "tag2"],
    title: "Title",
    text: "text body",
    date_created: "Date 1",
    date_modified: "Date 2",
  }
]

const Body = () => {
  return (
    <main>
      {posts.map((post) => (<Post title={post.title} text={post.text} />))}  
    </main>
  )
}

export default Body