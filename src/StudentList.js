import React from 'react';

function StudentItem({name, grade}) {

    const status = grade < 75 ? "Failed" : "Passed";

    return (
    <li>{name} has a grade of {grade}, he has {status}</li>
    )
}


// function StudentList(props){
//     const students = props.students;
//     return(
//         <ul>
//             {students.map(item => <StudentItem key={item.name} name={item.name} grade={item.grade}/>)}
//         </ul>
//         )
// }


class StudentList extends React.Component{
    render(){
        const students = this.props.students;
        return(
            <ul>
                {students.map(item => <StudentItem key={item.name} name={item.name} grade={item.grade}/>)}
            </ul>
        )
    }
}

// Name - FAIL/PASS
// FAIL - below 75
export function StudentListContainer() {
    const students = [
        {
            name: "Paolo Manlapaz",
            grade: 60
        },
        {
            name: "Keith Tan",
            grade: 114
        },
        {
            name: "JM Lontoc",
            grade: 97
        },
        {
            name: "Ira Macazo",
            grade: 98
        },
        {
            name: "Emmanuel Callado",
            grade: 55
        },
        {
            name: "John Doe",
            grade: 58
        }
    ]    

    return (
        <div>
            <StudentList students = {students}/>
        </div>
    )
}
