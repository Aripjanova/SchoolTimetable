import React, {Component} from "react";
import {Form,Table, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
class Lessons extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            subject_name: '',
            edittingSubject: [],
            id_subject:'',
            editSubjectName: '',
        }
        this.deleteSubject = this.deleteSubject.bind(this);
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
         // console.log(this.state.idlessons)
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <th scope="col">Предметтер</th>
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

                {/*MODAL FOR ADD LESSON*/}
                <div className="modal fade" id="addLesson" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Жаны предмет кошуу</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/*<Row style={{display:'block'}} className={Row} md={2}>*/}
                                {/*    <div className={Col}>*/}
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Сабактын аталышы</Form.Label>
                                        {/*<Form.Control placeholder='сабактын аталышын жазыныз ' value={this.state.lesson_name} onChange={ e=>this.setState({lesson_name:e.target.value })}/>*/}
                                        <Form.Text className="text-muted">
                                            крилица турундо киргизилсин!
                                        </Form.Text>
                                    </Form.Group>
                                    <input value={this.state.subject_name} onChange={ e=>this.setState({subject_name:e.target.value})}></input>

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
                                <button type="button" className="btn btn-primary" onClick={this.addSubject}>Кошуу</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*MODAL FOR EDIT LESSON*/}
                <div className="modal fade" id="editLesson" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Озгортуу</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/*<Row style={{display:'block'}} className={Row} md={2}>*/}
                                {/*    <div className={Col}>*/}
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Сабактын аталышы</Form.Label>
                                        {/*<Form.Control placeholder='сабактын аталышын жазыныз ' value={this.state.lesson_name} onChange={ e=>this.setState({lesson_name:e.target.value })}/>*/}
                                        <Form.Text className="text-muted">
                                            крилица турундо киргизилсин!
                                        </Form.Text>
                                    </Form.Group>
                                    <input style={{display:"block"}} value={this.state.editSubjectName} onChange={ e=>this.setState({editSubjectName:e.target.value})}></input>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Отулуучу кана</Form.Label>
                                        {/*<Form.Control  placeholder='сабак отулуучу кана ' value={this.state.lesson_room}  onChange={ e=>this.setState({lesson_room:e.target.value})}/>*/}
                                    </Form.Group>

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
                                <button type="button" className="btn btn-primary" onClick={this.editSubject}>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Lessons;