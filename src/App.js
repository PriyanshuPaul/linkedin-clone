import React, { useEffect } from 'react';
import './App.css';
import Header from './features/header/Header';
import Sidebar from './features/sidebar/Sidebar';
import Login from './features/login/Login';
import Feed from './features/feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import News from './features/news/News';

function App() {
  const dispatch=useDispatch();
  const user=useSelector(selectUser)
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL
        }))
      }
      else{
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      <Header />
      {!user?(
       <Login/> 
      ):(
      <div className="app-body">
        <Sidebar/>
        <Feed/>
        <News/>
      </div>
      )}
    </div>
  );
}

export default App;
