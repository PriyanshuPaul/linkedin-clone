import React from 'react'
import './HeaderOption.css'
import Avatar from '@material-ui/core/Avatar';
function HeaderOption({Icon,title,avatar}) {
  return (
    <div className='header-option'>
        {Icon && <Icon className='header-option-icon'/>}
        {avatar && <Avatar className='header-option-icon' src={avatar}/>}
        <h1 className='header-option-title'>{title}</h1>
    </div>
  )
}

export default HeaderOption