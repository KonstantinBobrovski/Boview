import { BrowserRouter, Link } from 'react-router-dom'
import styles from './Navbar.css'

export function Navbar (props) {
  const links = [{ text: 'Главна' }, { text: 'Регистрация' }, { text: '' }]
  console.log(links)

  return (
    <BrowserRouter>
      <nav id='mainNavbar'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='logo'
            viewBox='26.504000000000005 -18.633 450.06399999999996 531.9280000000001'
          >
            <text x='55%' y='65%'>
              R
            </text>
            <path
              d='M437,12.3C437,5.5,431.5,0,424.7,0H126.3C84.4,0,50.4,34.1,50.4,75.9v335.7c0,41.9,34.1,75.9,75.9,75.9h298.5
			c6.8,0,12.3-5.5,12.3-12.3V139.6c0-6.8-5.5-12.3-12.3-12.3H126.3c-28.3,0-51.4-23.1-51.4-51.4S98,24.5,126.3,24.5h298.5
			C431.5,24.5,437,19,437,12.3z M126.3,151.8h286.2V463H126.3c-28.3,0-51.4-23.1-51.4-51.4V131.7
			C88.4,144.2,106.5,151.8,126.3,151.8z 
M130.5,64.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h280.1c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H130.5z'
            />
          </svg>
        </div>
      </nav>
    </BrowserRouter>
  )
}
