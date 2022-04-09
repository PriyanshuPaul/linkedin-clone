import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    const recentItem=(item)=>(
        <div className="sidebar-recent-item">
            <span className='sidebar-hash'>#</span>
            <p>{item}</p>
        </div>
    )
  return (
    <div className="sidebar">
        <div className="sidebar-top">
            <img src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cover-pic"/>
            <Avatar className='sidebar-avatar'/>
            <h1>Priyanshu Paul</h1>
            <h2>priyanshupaul23@gmail.com</h2>
        </div>
        <div className="sidebar-stat-section">
            <div className="sidebar-stat">
                <p>Who view your profile</p>
                <p className='stat-number'>100</p>
            </div>
            <div className="sidebar-stat">
                <p>Views on your post</p>
                <p className='stat-number'>500</p>
            </div>
        </div>
        <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItem("Full Stack")}
            {recentItem("React JS")}
            {recentItem("Angular")}
            {recentItem("Next JS")}
        </div>
    </div>
  )
}
export default Sidebar