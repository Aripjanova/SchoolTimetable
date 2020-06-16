import React ,{Component} from "react";
import {Form,Table, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
class Time extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            subject_name: '',
            edittingSubject: [],
            id_subject:'',
            editSubjectName: '',
        }
    }

    componentDidMount(){

        this.getSubject()
    }
    getSubject=_=>{
        fetch('https://localhost:5001/api/subject')
            .then(response => response.json())
            .then(response=>this.setState({subjects:response}))
    }
    addSubject= _ =>{
        const subject_name=this.state.subject_name;
        fetch(`https://localhost:5001/api/subject/post/?name=${subject_name}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ lesson_name:lesson_name,lesson_room:lesson_room }),
        })
            .then(this.getSubject)
    }
    // addLesson= _ =>{
    //     const lesson_name=this.state.lesson_name;
    //     const lesson_room=this.state.lesson_room;
    //     fetch(`http://localhost:3001/lesson/add?lesson_name=${lesson_name}&lesson_room=${lesson_room}`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         // body: JSON.stringify({ lesson_name:lesson_name,lesson_room:lesson_room }),
    //     })
    //         .then(this.getLessons)
    // }
    handleClick = (subject) => {
        console.log(subject);
        this.setState({id_subject:subject.id_subject,editSubjectName:subject.subject_name})

    }
    editSubject=_=>{
        const id_subject=this.state.id_subject
        const editSubjectName=this.state.editSubjectName;
        console.log(id_subject)
        // fetch(`http://localhost:3001/lesson/update/`+this.state.idlessons, {
        //     method: 'PUT',
        //      body: JSON.stringify({ lesson_name:edit_lesson_name,lesson_room:edit_lesson_room }),
        // })
        //     .then(this.getLessons)
        fetch('https://localhost:5001/api/subject/'+id_subject,{
            method: 'put',
            body: JSON.stringify({
                name: editSubjectName,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(this.getSubject)
    }
    deleteSubject=(id_subject)=>{
        // const idlessons=this.state.idlessons
        fetch('https://localhost:5001/api/subject/' +id_subject, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(res => console.log(res))
            .then(this.getSubject)
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <th scope="col">Сабак отуу убактысы</th>
                        <th scope="col"><button type='button' className="btn btn-primary" data-toggle="modal" data-target="#addLesson"
                                                data-whatever="@mdo"> Сабак  кошуу</button></th>
                        <th scope="col" ><button type='button' className="btn btn-primary" onClick={this.deleteAllClass}>Баарын очуруу </button> </th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.subjects.map(subject  => (
                        <tr key={subject.id_subject}>

                            <td>
                                <div style={{display:'inline'}}>
                                    <span style={{    cursor: 'pointer',
                                        color: '#000',}}>  {subject.name}</span>
                                </div>

                            </td>

                            <td>
                                <div className="buttuns" style={{display:'inline-block', float:'right'}}>
                                    <button className="editLesson" title="Редактировать" style={{
                                        touchAction: 'manipulation',
                                        border: 'none',
                                        background: 'none',
                                        borderRadius: '0',
                                        boxSizing: 'inherit',
                                        cursor:'pointer', textTransform: 'none',    overflow: 'visible',    margin: '0',
                                        //    color: 'inherit',
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit',
                                        lineHeight: 'inherit'}} data-toggle="modal" data-target="#editLesson"
                                            data-whatever="@mdo">
                                        <i className="fa fa-edit" style={{    float: 'right',
                                            width: 'auto',
                                            height: 'auto',fontWeight: '900',
                                            color: '#f0783a',
                                            textShadow: '1px 1px 1px #ccc'}}  onClick={this.handleClick.bind(this, subject)} data-id={subject.id_subject}>
                                        </i>
                                    </button>
                                    <button className="deleteLesson" title="Удалить" style={{
                                        touchAction: 'manipulation',
                                        border: 'none',
                                        background: 'none',
                                        borderRadius: '0',
                                        boxSizing: 'inherit',
                                        cursor:'pointer', textTransform: 'none',    overflow: 'visible',    margin: '0',
                                        color: 'inherit',
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit',
                                        lineHeight: 'inherit'}}>
                                        <i className="fa fa-window-close" style={{float: 'right',
                                            width: 'auto',
                                            height: 'auto',fontWeight: '900',
                                            color: '#f0783a',
                                            textShadow: '1px 1px 1px #ccc'}} onClick={this.deleteSubject.bind(this, subject.id_subject)} data-id={subject.id_subject}>

                                        </i>
                                    </button>
                                </div>
                            </td>

                            <td></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

}
export default Time