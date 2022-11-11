import Filter from './Filter'
import Actions from './Actions'
import { Outlet } from 'react-router-dom'

const PostsLayout = () => {
  return (
    <>
    <Filter />
    <Actions />
    <Outlet />
    </>
  )
}

export default PostsLayout