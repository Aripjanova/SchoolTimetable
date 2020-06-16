import React, {Component} from "react";
import {Form,Table, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
class TeacherList extends Component{
    constructor() {
        super();
        this.state = {
            teachers: [],
            firstName: '',
            lastName:'',
            id_teacher:'',
            edirFirstName: '',
            edirLastName: '',


        }
        // this.deleteClass = this.deleteClass.bind(this);
    }
    componentDidMount(){

        this.getTeachers()
    }
    getTeachers=_=>{
        fetch('https://localhost:5001/api/teacher/')
            .then(response => response.json())
            .then(response=>this.setState({teachers:response}))
    }
    addTeacher=_=>{
        const firstName=this.state.firstName;
        const lastName=this.state.lastName;
        fetch(`https://localhost:5001/api/teacher/post?first_name=${firstName}&last_name=${lastName}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ lesson_name:lesson_name,lesson_room:lesson_room }),
        })
            .then(this.getTeachers)
    }
    handleClick = (teacher) => {
        console.log(teacher);
        this.setState({id_teacher:teacher.id_teacher,editFirstName:teacher.firstName,editLastName:teacher.lastName})

    }
    editTeacher=_=>{
        const id_teacher=this.state.id_teacher
        const firstName=this.state.editFirstName;
        const lastName=this.state.edirLastName
        console.log(id_teacher)
        // fetch(`http://localhost:3001/lesson/update/`+this.state.idlessons, {
        //     method: 'PUT',
        //      body: JSON.stringify({ lesson_name:edit_lesson_name,lesson_room:edit_lesson_room }),
        // })
        //     .then(this.getLessons)
        fetch('https://localhost:5001/api/teacher/'+id_teacher,{
            method: 'put',
            body: JSON.stringify({
                first_name:firstName,
                last_name: lastName,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(this.getTeachers)
    }
    deleteTeacher=(id_teacher)=>{
        // const idclasses=this.state.idclasses
        fetch('https://localhost:5001/api/teacher/' + id_teacher, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
            .then(this.getTeachers)
    }
    deleteTeacher=()=>{
        // const idclasses=this.state.idclasses
        fetch('https://localhost:5001/api/teacher/' , {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
            .then(this.getTeachers)
    }
    render() {
        // console.log(this.state.classes)
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <th scope="col">	 ID</th>
                        <th scope="col">Аты</th>
                        <th scope="col">Фамилиясы</th>
                        <th scope="col"><button type='button' className="btn btn-primary" data-toggle="modal" data-target="#addTeacher"
                                                data-whatever="@mdo"> Мугалим кошуу</button></th>
                        <th scope="col" ><button type='button' className="btn btn-primary" onClick={this.deleteAllClass}>Баарын очуруу </button> </th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.teachers.map(teacher  => (
                        <tr key={teacher.id_teacher}>
                            <td>
                                <div style={{display:'inline'}}>
                                    <span style={{    cursor: 'pointer',
                                        color: '#000',}}>  {teacher.id_teacher}</span>
                                </div>

                            </td>
                            <td>
                                <div style={{display:'inline'}}>
                                    <span style={{    cursor: 'pointer',
                                        color: '#000',}}>  {teacher.first_name}</span>
                                </div>

                            </td>
                            <td>
                                <div style={{display:'inline'}}>
                                    <span style={{    cursor: 'pointer',
                                        color: '#000',}}>  {teacher.last_name}</span>
                                </div>

                            </td>
                            <td>

                                <div className="buttuns" style={{display:'inline-block', float:'right'}}>
                                    <button className="editTeacher" title="Редактировать" style={{
                                        touchAction: 'manipulation',
                                        border: 'none',
                                        background: 'none',
                                        borderRadius: '0',
                                        boxSizing: 'inherit',
                                        cursor:'pointer', textTransform: 'none',    overflow: 'visible',    margin: '0',
                                        //    color: 'inherit',
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit',
                                        lineHeight: 'inherit'}} data-toggle="modal" data-target="#editTeacher"
                                            data-whatever="@mdo">
                                        <i className="fa fa-edit" style={{    float: 'right',
                                            width: 'auto',
                                            height: 'auto',fontWeight: '900',
                                            color: '#f0783a',
                                            textShadow: '1px 1px 1px #ccc'}}  onClick={this.handleClick.bind(this, teacher)} data-id={teacher.id_teacher}>

                                        </i>
                                    </button>
                                    <button className="deleteTeacher" title="Удалить" style={{
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
                                            textShadow: '1px 1px 1px #ccc'}} onClick={this.deleteTeacher.bind(this, teacher.id_teacher)} data-id={teacher.id_teacher}>

                                        </i>
                                    </button>
                                </div>
                            </td>

                            <td></td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/*MODAL FOR ADD LESSON*/}
                <div className="modal fade" id="addTeacher" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Жаны мугалим кошуу</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/*<Row style={{display:'block'}} className={Row} md={2}>*/}
                                {/*    <div className={Col}>*/}
                                <Form>

                                    <input value={this.state.firstName} onChange={ e=>this.setState({firstName:e.target.value})}></input>
                                    <Form.Text className="text-muted">
                                        Мугалимдин аты
                                    </Form.Text>
                                    <input value={this.state.lastName}  onChange={ e=>this.setState({lastName:e.target.value})}></input>
                                    <Form.Text className="text-muted">
                                        Мугалимдин фамилиясы
                                    </Form.Text>


                                </Form>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary" onClick={this.addTeacher}>Мугалимди кошуу</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*MODAL FOR EDIT LESSON*/}
                <div className="modal fade" id="editTeacher" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Мушалимдин маалыматын өзгөртүү</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/*<Row style={{display:'block'}} className={Row} md={2}>*/}
                                {/*    <div className={Col}>*/}
                                <Form>

                                    <input style={{display:"block"}} value={this.state.editFirstName} onChange={ e=>this.setState({editFirstName:e.target.value})} placeholder={this.state.editFirstName}></input>
                                    <Form.Text className="text-muted">
                                        Мугалимдин аты
                                    </Form.Text>
                                    <input value={this.state.editLastName}  onChange={ e=>this.setState({editLastName:e.target.value})} placeholder={this.state.editLastName}></input>
                                    <Form.Text className="text-muted">
                                        Мугалимдин фамилиясы
                                    </Form.Text>


                                </Form>
                                {/*        <Form>*/}
                                {/*            <Form.Group controlId="formBasicEmail">*/}
                                {/*                <Form.Label>Класстын номери</Form.Label>*/}
                                {/*                <Form.Control placeholder=' цифра турундо жазыныз!' value={this.state.class_number} onChange={ e=>this.setState({class_number:e.target.value })}/>*/}
                                {/*                <Form.Label>Класстын тамгасы</Form.Label>*/}
                                {/*                <Form.Control as="select" value={this.state.alph_class} onChange={e=>this.setState({alph_class:e.target.value })}>*/}
                                {/*                    <option>А</option>*/}
                                {/*                    <option>Б</option>*/}
                                {/*                    <option>В</option>*/}
                                {/*                    <option>Г</option>*/}
                                {/*                    <option>Д</option>*/}
                                {/*                    <option>Е</option>*/}
                                {/*                </Form.Control>*/}
                                {/*            </Form.Group>*/}

                                {/*            <Button variant="primary" type="submit" onClick={this.addClass}>*/}
                                {/*                Кошуу*/}
                                {/*            </Button>*/}
                                {/*        </Form>*/}

                                {/*    </div>*/}
                                {/*    <div className={Col}>*/}
                                {/*        <Table responsive>*/}
                                {/*            <thead>*/}
                                {/*            <tr>*/}
                                {/*                <th>#</th>*/}
                                {/*                <th>Сабактын аталышы</th>*/}
                                {/*                <th>Сабак отуулчу кана</th>*/}
                                {/*            </tr>*/}
                                {/*            </thead>*/}
                                {/*            <tbody>*/}
                                {/*            <tr>*/}
                                {/*                <td> {this.state.lessons.map((lesson, i)=>*/}
                                {/*                    <tr>{i}  </tr>)   }*/}
                                {/*                </td>*/}
                                {/*                <td>*/}
                                {/*                {this.state.lessons.map((lesson, i)=>*/}

                                {/*                    <div onClick={this.EditLesson(5)}>{lesson.lesson_name}*/}
                                {/*                    </div>)   }*/}
                                {/*                </td>*/}
                                {/*                <td >*/}

                                {/*                {this.state.lessons.map((lesson)=>*/}
                                {/*                    <tr> {lesson.lesson_room}</tr>) }*/}

                                {/*                </td>*/}
                                {/*            </tr>*/}

                                {/*            </tbody>*/}
                                {/*        </Table>*/}
                                {/*    </div>*/}
                                {/*</Row>*/}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary" onClick={this.editTeacher}>Кошуу</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TeacherList;