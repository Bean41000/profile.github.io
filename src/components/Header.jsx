import './comstyle.css'
import { Link, BrowserRouter } from 'react-router-dom';

function Header() {

  return (
<header className='header'>
    <BrowserRouter>
    <nav className='navbar'>
        <Link to="#About">About</Link>
        <Link to="#Contect">Contect</Link>
    </nav>
    </BrowserRouter>
</header>  )
}

export default Header;
