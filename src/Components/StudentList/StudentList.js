import React from 'react';
import Student from '../Student/Student'
import './StudentList.css'

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
    this.addTagToStudent = this.addTagToStudent.bind(this)
  }

  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students', {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET',
      mode: 'cors',
    })
      .then(res => res.json())
      .then(fetchStudents => {
        this.setState({ students: fetchStudents.students });
      })
  }

  addTagToStudent(id, tag) {
    const students = [...this.state.students]
    const studentIndex = students.findIndex(({ id: studentId }) => studentId === id)
    const student = { ...students[studentIndex] }
    if (!student.tags) student.tags = []
    student.tags.push(tag)
    students.splice(studentIndex, 1, student)
    this.setState({ students })
  }

  render() {
    return (
      <div className='student-list'>
        {this.state.students
          .filter(this.props.filter)
          .map((student) => <Student {...student} onTagAddition={this.addTagToStudent} />)}
      </div>
    )
  }

};

export default StudentList;
