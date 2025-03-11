import React from 'react'
import { useNavigate } from 'react-router-dom';
import homeIcon from '../../../src/assets/HomePageIcon/homeIcon.svg';
import messageIcon from '../../../src/assets/HomePageIcon/messageIcons.svg';
import contactIcon from '../../../src/assets/HomePageIcon/contact.svg'
import settingsIcon from '../../../src/assets/HomePageIcon/settingsIcon.svg'
import searchIcon from '../../../src/assets/HomePageIcon/searchIcon.svg'

function SideMenu() {
  const navigate = useNavigate();

  const handleNavigate = (path)=>{
    navigate(path)
  }
  return (
      <aside className='sidemenu'>
        <button onClick={() => handleNavigate('/homepage')}>
          <img src={homeIcon} alt="Home" className='icons' />
        </button>
        <button onClick={() => handleNavigate('/messagepage')}>
          <img src={messageIcon} alt="Messages" className='icons'/> 
        </button>
        <button onClick={() => handleNavigate('/searchpage')}>
          <img src={searchIcon} alt="Search" className='icons'/> 
        </button>
        <button onClick={() => handleNavigate('/contact page')}>
          <img src={contactIcon} alt="Contact" className='icons'/> 
        </button>
        <button onClick={() => handleNavigate('/settingspage')}>
          <img src={settingsIcon} alt="Settings" className='icons'/> 
        </button>
      </aside>
  
  )
}

export default SideMenu