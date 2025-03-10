import React from 'react'
import homeIcon from '../../src/assets/HomePageIcon/homeIcon.svg';
import messageIcon from '../../src/assets/HomePageIcon/messageIcons.svg'
import contactIcon from '../../src/assets/HomePageIcon/contact.svg'
import settingsIcon from '../../src/assets/HomePageIcon/settingsIcon.svg'
import searchIcon from '../../src/assets/HomePageIcon/searchIcon.svg'
function SideMenu() {
  return (
    <>
      <aside className='side-menu'>
        <div>
          <img src={homeIcon} alt="Home" />
        </div>
        <div>
          <img src={messageIcon} alt="Messages" /> 
        </div>
        <div>
          <img src={searchIcon} alt="Search" /> 
        </div>
        <div>
          <img src={contactIcon} alt="Contact" /> 
        </div>
        <div>
          <img src={settingsIcon} alt="Settings" /> 
        </div>
      </aside>
    </>
  )
}

export default SideMenu