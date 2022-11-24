import './Footer.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className='footer'>
    <div></div>
    <h5 className='m-0 grid-middle'> &copy; 2022 Sida Wang </h5>
    <Link to={"/admin"} className='grid-right px-3'>
      <Button type="button" className="btn btn-secondary">Admin Dashboard
      </Button>
    </Link>
    </div>
  )
}

export default Footer