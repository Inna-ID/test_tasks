import {NavLink} from 'react-router-dom'

const Header = () => {
   return (
      <header>
         <ul>
            <li><NavLink to='/'>Главная</NavLink></li>
            <li><NavLink to='/employees'>Сотрудники</NavLink></li>
         </ul>
      </header>
   )
}

export default Header;
