import React from 'react';
import './App.css';
import Header from './features/header/Header';
import Sidebar from './features/sidebar/Sidebar';
import Feed from './features/feed/Feed';
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
