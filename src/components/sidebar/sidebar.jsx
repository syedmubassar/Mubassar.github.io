import React, { useState } from 'react';
import './sidebar.css';
import Logo from "../../assets/logo.jpg";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (

    <>
<aside className={toggle ? "aside show-menu" : "aside"}>
<a href="#home" className="nav__logo">
<img src={Logo} alt= "logo" className='logo__img'/>
</a>
<nav className='nav'>
  <div className='nav__menu'>
    <ul className='nav__list'>
      <li className='nav__item'>
      <a href='#home' className='nav__link'>
      <span className="icon-home"></span>
      </a>
      </li>

      <li className='nav__item'>
      <a href='#about' className='nav__link'>
      <span className="icon-user-following"></span>
      </a>
      </li>

      <li className='nav__item'>
      <a href='#services' className='nav__link'>
      <span className="icon-briefcase"></span>
      </a>
      </li>

      <li className='nav__item'>
      <a href='#resume' className='nav__link'>
      <span className="icon-graduation"></span>
      </a>
      </li>

      <li className='nav__item'>
      <a href='#Portfolio' className='nav__link'>
      <span className="icon-layers"></span>
      </a>
      </li>

      <li className='nav__item'>
      <a href='#contact' className='nav__link'>
      <span className="icon-bubble"></span>
      </a>
      </li>
    </ul>
  </div>
</nav>

<div className='nav__footer'>
  <span className='copyright'>
  &copy; 2022 - 2024.
  </span>
</div> 
</aside>

<div className={toggle ? "nav__toggle nav__toggle-open" : 
"nav__toggle"} onClick={()=> showMenu(!toggle)}>
<i className='icon-menu'></i>
</div>
</>
  );
};
export default Sidebar

