import React from 'react';

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []

        }
    }

    render() {
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
        return (
            {this.state.students.map(student => {
                return (
                    <div>{student.firstName}</div>
                )
            })}
        )
    }
    
};

export default StudentList;
