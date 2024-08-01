import React from 'react'
import { useState } from "react";
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'


function Header({ OpenSidebar }) {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = React.createRef();
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

    const navigate = useNavigate();
    const logout = () =>{
        localStorage.clear();
        navigate('/login');
    }

    const [isDarkMode, setIsDarkMode] = useState(() => false);


  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>

        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <div className="profilesection" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} ><BsPersonCircle className='icon'/></div>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef}>
          <div><ion-icon name="settings-outline"></ion-icon> Profile</div>
          <div onClick={logout}> <ion-icon name="log-out-outline"></ion-icon> Logout</div>
        </div>
      )}
    </header>
  )
}

export default Header