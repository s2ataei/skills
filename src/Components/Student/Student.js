import React from 'react';
import './Student.css';

const average = (nums) => {
  const sum = nums.reduce((sum, num) => sum + num, 0)
  return sum / nums.length
}

const Student = ({ 
  city,
  company,
  email,
  firstName,
  lastName,
  grades,
  id,
  pic,
  skill
}) => {
  const [isOpen, setOpen] = React.useState(false)

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
        <div style={{ height: isOpen ? 100 : 0, overflow: 'hidden' }}>
          whatever info
        </div>
      </div>
      <button onClick={event => setOpen(!isOpen)}></button>
    </div>
  )
}

export default Student
