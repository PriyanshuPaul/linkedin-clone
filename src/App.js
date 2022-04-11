import React from 'react';
import './App.css';
import Header from './features/header/Header';
import Sidebar from './features/sidebar/Sidebar';
import Login from './features/login/Login';
import Feed from './features/feed/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user=useSelector(selectUser)
  return (
    <div className="app">
      <Header />
      {!user?(
       <Login/> 
      ):(
      <div className="app-body">
        <Sidebar/>
        <Feed/>
      </div>
      )}
    </div>
  );
}

export default App;
