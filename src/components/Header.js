import './Header.css'
import { Link } from 'react-router-dom'


const Header = ({ title, subtitle }) => {
  return (
    <>
    <header className='mb-0 h1 text-primary'>
    <Link to={'/'} className='nav-link'>
          {title}
      <h5>{subtitle}</h5>
    </Link>
    </header>
    </>
  )
}

export default Header