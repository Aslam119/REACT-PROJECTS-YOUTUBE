import './App.css';
import {useEffect, useState} from 'react'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Videos from './components/Videos';

function App(){


  return (
    <div className="App">
      <Sidebar/>
      <div style={{display:"flex",flexDirection:"column"}}>
        <Navbar/>
        <Videos/>
      </div>
    </div>
  );
}

export default App;
