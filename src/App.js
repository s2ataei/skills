import './App.css';
import React, { Component } from 'react';
import Students from './Components/StudentList/StudentList';

function App() {
  return (
    <div className='app'>
      <div className='content'>
        <Students/>
      </div>
    </div>
  );
}

export default App;
