import './App.css';
import React, { Component } from 'react';
import StudentList from './Components/StudentList/StudentList';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      filterName: '',
      filterTag: ''
    }

    this.handleSearchByName = this.handleSearchByName.bind(this)
    this.handleSearchByTag = this.handleSearchByTag.bind(this)
    this.filterStudent = this.filterStudent.bind(this)
  }

  handleSearchByName({ target: { value: filterName } }) {
    this.setState({ filterName })
  }

  handleSearchByTag({ target: { value: filterTag } }) {
    this.setState({ filterTag })
  }

  filterStudent(student) {
    let nameMatches, tagMatches
    const { filterName, filterTag } = this.state

    if (filterName === '') {
      nameMatches = true
    } else {
      nameMatches = student.firstName.toLowerCase().includes(filterName.toLowerCase())
        || student.lastName.toLowerCase().includes(filterName.toLowerCase())
    }

    if (filterTag === '') {
      tagMatches = true
    } else {
      tagMatches = student.tags && student.tags.some(tag => tag.includes(filterTag))
    }

    return nameMatches && tagMatches
  }

  render() {
    return (
      <div className='app'>
        <div className='content'>
          <input className='search' type='text' placeholder='Search by name' onChange={this.handleSearchByName}></input>
          <input className='search' type='text' placeholder='Search by tag' onChange={this.handleSearchByTag}></input>
          <div className='results'>
            <StudentList filter={this.filterStudent} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
