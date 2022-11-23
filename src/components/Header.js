import './Header.css'
import { Link } from 'react-router-dom'


const Header = ({ title, subtitle }) => {
  return (
    <>
    <header className='p-5 mb-0 h1 text-primary'>
      <Link to={'/'} className='nav-link'>
          {title}
      </Link>
      <h5>{subtitle}</h5>
    </header>
    </>
  )
}

export default Header