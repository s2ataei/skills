import React from 'react';
import './Student.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/add.svg';


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
  skill,
  tags,
  onTagAddition,
}) => {
  const [isOpen, setOpen] = React.useState(false)
  const [tagInput, setTagInput] = React.useState('')
  const handleSubmit = (event) => {
    if (event.keyCode === 13) {
      console.log('enter')
      onTagAddition(id, tagInput)
      setTagInput('')
    }
  }

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value)
  }

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
        <div className="tags">
          {tags && tags.map((tag) =>
            <span className='tag'>{tag}</span>
          )}
        </div>
        <input
          className='search'
          type='text'
          placeholder='Add a tag'
          onKeyDown={(e) => handleSubmit(e)}
          value={tagInput}
          onChange={(event) => handleTagInputChange(event)}
        />
        <div className='dropdown' style={{ height: isOpen ? 160 : 0, overflow: 'hidden' }}>
          {grades.map((grade, index) =>
            <div>Test {index + 1}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grade}%</div>
          )}
        </div>
      </div>
      <button className='dropdown-button' onClick={event => setOpen(!isOpen)}>{isOpen ? <Minus /> : <Plus />}</button>
    </div>
  )
}

export default Student
