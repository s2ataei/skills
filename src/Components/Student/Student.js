import React from 'react';
import './Student.css';

const average = (nums) => {
  const sum = nums.reduce((sum, num) => sum + num, 0)
  return sum / nums.length
}

export default class Student extends React.Component {
  render() {
    const { 
      city,
      company,
      email,
      firstName,
      lastName,
      grades,
      id,
      pic,
      skill
    } = this.props

    return (
      <div className='student'>
        <div className='student-pic'>
          <div style={{ backgroundImage: `url(${pic})` }} />
        </div>
        <div className='student-details'>
          <h1>{firstName} {lastName}</h1>
          <div>
            <div>Email: {email}</div>
            <div>Company: {company}</div>
            <div>Skill: {skill}</div>
            <div>Average: {average(grades.map(Number))}%</div>
          </div>
        </div>
      </div>
    )
  }
}
