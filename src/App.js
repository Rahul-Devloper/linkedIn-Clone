import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">

      {/* Header */}
        <Header />

      {/* App Body */}
      <div className="app_body">
        <SideBar />
        <Feed />
        {/* Widget */}
      </div>
        
    </div>
  );
}

export default App;
