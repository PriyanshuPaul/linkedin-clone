import React from 'react'
import './HeaderOption.css'
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../userSlice';
function HeaderOption({Icon,title,avatar,onClick}) {
  const user=useSelector(selectUser)
  return (
    <div className='header-option' onClick={onClick}>
        {Icon && <Icon className='header-option-icon'/>}
        {avatar && <Avatar className='header-option-icon' src={user?.profileUrl}>{user?.email[0]}</Avatar>}
        <h1 className='header-option-title'>{title}</h1>
    </div>
  )
}

export default HeaderOption