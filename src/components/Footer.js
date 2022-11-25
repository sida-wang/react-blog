import './Footer.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <footer className='footer'>
    <></>
    <div className='m-0 grid-middle h5'> &copy; 2022 Sida Wang </div>
    <Link to={"/admin"} className='grid-right px-3'>
      <Button type="button" className="btn btn-secondary">Admin
      </Button>
    </Link>
    </footer>
  )
}

export default Footer