import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer'>Footer <Link to={"/admin"}>Admin Dashboard</Link></div>
    </>

  )
}

export default Footer