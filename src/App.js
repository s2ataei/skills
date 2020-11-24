import './App.css';
import React, { Component } from 'react';
import StudentList from './Components/StudentList/StudentList';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      filter: ''
    }
    
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch({ target: { value: filter }}) {
    this.setState({ filter })
  }

  render() {
    return (
      <div className='app'>
        <div className='content'>
          <input className='search' type='text' placeholder='Search by name' onChange={this.handleSearch}></input>
          <div className='results'>
            <StudentList filter={this.state.filter} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
