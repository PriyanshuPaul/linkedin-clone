import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './header-option/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch} from 'react-redux';
import { logout} from '../userSlice';
import { auth } from '../../firebase';
function Header() {
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className="header-left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="header-logo" />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={PeopleIcon} title='Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={MessageIcon} title='Message' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar title='me'
          onClick={logoutApp}
        />




      </div>
    </div>
  )
}

export default Header