import React, {Component} from "react";
import {Form,Table, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
class Room extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            ID: '',
            name: '',
            editID: '',
            editName: '',
            id_subject:'',
            editSubjectName: '',
        }
        this.deleteRoom = this.deleteRoom.bind(this);
    }
    componentDidMount(){

        this.getRooms()
    }
    getRooms=_=>{
        fetch('http://localhost:3001/room')
            .then(response => response.json())
            .then(response=>this.setState({rooms:response}))
    }
    addRomm= _ =>{
        const ID=this.state.ID;
        const name=this.state.name;
        fetch(`http://localhost:3001/room/add?ID=${ID}&name=${name}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ lesson_name:lesson_name,lesson_room:lesson_room }),
        })
            .then(this.getRooms)
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
    handleClick = (room) => {
        console.log(room);
        this.setState({id_classRoom:room.id_classRoom,editID:room.ID,editName:room.name})

    }
    editRoom=_=>{
        const id_classRoom=this.state.id_classRoom;
        const ID=this.state.editID;
        const name=this.state.editName;
        console.log(id_classRoom)
        // fetch(`http://localhost:3001/lesson/update/`+this.state.idlessons, {
        //     method: 'PUT',
        //      body: JSON.stringify({ lesson_name:edit_lesson_name,lesson_room:edit_lesson_room }),
        // })
        //     .then(this.getLessons)
        fetch('http://localhost:3001/room/update/'+id_classRoom,{
            method: 'put',
            body: JSON.stringify({
                ID: ID,
                name: name,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(this.getRooms)
    }
    deleteRoom=(id_classRoom)=>{
        // const idlessons=this.state.idlessons
        fetch('http://localhost:3001/room/delete/' +id_classRoom, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(res => console.log(res))
            .then(this.getRooms)
    }

    render() {
        // console.log(this.state.idlessons)
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <th scope="col">Аудиториялар</th>
                        <th scope="col">Тиби</th>
                        <th scope="col"><button type='button' className="btn btn-primary" data-toggle="modal" data-target="#addRoom"
                                                data-whatever="@mdo"> Аудитория  кошуу</button></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.rooms.map(room  => (
                        <tr key={room.id_classRoom}>

                            <td>
                                <div style={{display:'inline'}}>
                                    <span style={{    cursor: 'pointer',
                                        color: '#000',}}>  {room.name}</span>
                                </div>

                            </td>
                            <td>
                                <div style={{display:'inline'}}>
                                    <span style={{    cursor: 'pointer',
                                        color: '#000',}}>  {room.ID}</span>
                                </div>

                            </td>

                            <td>
                                <div className="buttuns" style={{display:'inline-block', float:'right'}}>
                                    <button className="editRoom" title="Редактировать" style={{
                                        touchAction: 'manipulation',
                                        border: 'none',
                                        background: 'none',
                                        borderRadius: '0',
                                        boxSizing: 'inherit',
                                        cursor:'pointer', textTransform: 'none',    overflow: 'visible',    margin: '0',
                                        //    color: 'inherit',
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit',
                                        lineHeight: 'inherit'}} data-toggle="modal" data-target="#editRoom"
                                            data-whatever="@mdo">
                                        <i className="fa fa-edit" style={{    float: 'right',
                                            width: 'auto',
                                            height: 'auto',fontWeight: '900',
                                            color: '#f0783a',
                                            textShadow: '1px 1px 1px #ccc'}}  onClick={this.handleClick.bind(this, room)} data-id={room.id_classRoom}>
                                        </i>
                                    </button>
                                    <button className="deleteRoom" title="Удалить" style={{
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
                                            textShadow: '1px 1px 1px #ccc'}} onClick={this.deleteRoom.bind(this, room.id_classRoom)} data-id={room.id_classRoom}>

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
                <div className="modal fade" id="addRoom" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Жаны аудитория кошуу</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/*<Row style={{display:'block'}} className={Row} md={2}>*/}
                                {/*    <div className={Col}>*/}
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Аудиториянын аталышы</Form.Label>
                                        {/*<Form.Control placeholder='сабактын аталышын жазыныз ' value={this.state.lesson_name} onChange={ e=>this.setState({lesson_name:e.target.value })}/>*/}
                                        <Form.Text className="text-muted">
                                            крилица турундо киргизилсин!
                                        </Form.Text>
                                    </Form.Group>
                                    <input value={this.state.name} onChange={ e=>this.setState({name:e.target.value})}></input>
                                    <input value={this.state.ID} onChange={ e=>this.setState({ID:e.target.value})}></input>

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
                                <button type="button" className="btn btn-primary" onClick={this.addRomm}>Кошуу</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*MODAL FOR EDIT LESSON*/}
                <div className="modal fade" id="editRoom" tabIndex="-1" role="dialog"
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
                                        <Form.Label>Аудиториянын аталышы</Form.Label>
                                        {/*<Form.Control placeholder='сабактын аталышын жазыныз ' value={this.state.lesson_name} onChange={ e=>this.setState({lesson_name:e.target.value })}/>*/}
                                        <Form.Text className="text-muted">
                                            крилица турундо киргизилсин!
                                        </Form.Text>
                                    </Form.Group>
                                    <input style={{display:"block"}} value={this.state.name} onChange={ e=>this.setState({name:e.target.value})}></input>
                                    <input style={{display:"block"}} value={this.state.ID} onChange={ e=>this.setState({ID:e.target.value})}></input>


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
                                <button type="button" className="btn btn-primary" onClick={this.editRoom}>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Room;