import { BrowserRouter, Link } from 'react-router-dom'
import styles from './Navbar.css'
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import { NavBarSearch } from '../NavBarSearch/NavBarSearch';

export function Navbar(props) {
  const links = [{ text: 'Главна' }, { text: 'Регистрация' }, { text: '' }]
  console.log(links)

  return (
    <BrowserRouter>
      <nav id='mainNavbar'>
        <div>
          <Logo />
        </div>
        <div className='nav-content'>
          <NavBarSearch />
        </div>

      </nav>
    </BrowserRouter>
  )
}
