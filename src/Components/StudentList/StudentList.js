import React from 'react';
import Student from '../Student/Student'
import './StudentList.css'

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []

        }
    }

    componentDidMount() {
        fetch('https://api.hatchways.io/assessment/students', {
            headers: {
                Accept: 'application/json'
            },
            method: 'GET',
            mode: 'cors',
        })
            .then(res=>res.json())
            .then(fetchStudents => {
                this.setState({students:fetchStudents.students});
            })
    }

    render() {
        return (
            <div className='student-list'>
                {this.state.students
                .filter((student) => {
                    if (this.props.filter === '') return true
                    return student.firstName.toLowerCase().includes(this.props.filter.toLowerCase())
                    || student.lastName.toLowerCase().includes(this.props.filter.toLowerCase())
                })
                .map((student) => <Student {...student} />)}
            </div>
        )
    }
    
};

export default StudentList;
