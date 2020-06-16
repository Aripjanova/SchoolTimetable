import React, {Component} from "react";
import {Form,Table, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
class Blocks extends Component{
    constructor() {
        super();
        this.state = {
            classes: [],
            name: '',
            id_groups:'',
            id_class:'',
            editName: '',
            edit_id_class: '',


        }
        // this.deleteClass = this.deleteClass.bind(this);
    }
    componentDidMount(){

        this.getClasses()
    }
    getClasses=_=>{
        fetch('https://localhost:5001/api/group/')
            .then(response => response.json())
            .then(response=>this.setState({classes:response}))
            .catch(() => console.log("Can’t access " + 'https://localhost:5001/api/group/ '+ " response. Blocked by browser?"))
    }
    addClass= _ =>{
        const name=this.state.name;
        const id_class=this.state.id_class;
        fetch(`https://localhost:5001/api/group?name=${name}&id_class=${id_class}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ lesson_name:lesson_name,lesson_room:lesson_room }),
        })
            .then(this.getClasses)
    }
    handleClick = (classes) => {
        console.log(classes);
        this.setState({id_groups:classes.id_groups,editName:classes.name,edit_id_class:classes.id_class})

    }
    editClass=_=>{
        const id_groups=this.state.id_groups
        const name=this.state.editName;
        const id_class=this.state.edit_id_class
        console.log(id_groups)
        // fetch(`http://localhost:3001/lesson/update/`+this.state.idlessons, {
        //     method: 'PUT',
        //      body: JSON.stringify({ lesson_name:edit_lesson_name,lesson_room:edit_lesson_room }),
        // })
        //     .then(this.getLessons)
        fetch('https://localhost:5001/api/group/'+id_groups,{
            method: 'put',
            body: JSON.stringify({
                name:name,
                id_class: id_class,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(this.getClasses)
    }
    deleteClass=(id_groups)=>{
        // const idclasses=this.state.idclasses
        fetch('https://localhost:5001/api/group/' + id_groups, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
            .then(this.getClasses)
    }
    deleteAllClass=()=>{
        // const idclasses=this.state.idclasses
        fetch('https://localhost:5001/api/group/' , {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
            .then(this.getClasses)
    }
    render() {
        // console.log(this.state.classes)
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <th scope="col">	 ID</th>
                        <th scope="col">Класс аталышы</th>
                        <th scope="col">Классы</th>
                        <th scope="col"><button type='button' className="btn btn-primary" data-toggle="modal" data-target="#addClass"
                                                data-whatever="@mdo"> Класс кошуу</button></th>
                        <th scope="col" ><button type='button' className="btn btn-primary" onClick={this.deleteAllClass}>Баарын очуруу </button> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.classes.map(classes  => (
                        <tr key={classes.id_groups}>
                            <td>
                                <div style={{display:'inline'}}>
                                    <span style={{    cursor: 'pointer',
                                        color: '#000',}}>  {classes.id_groups}</span>
                                </div>

                            </td>
                            <td>
                                <div style={{display:'inline'}}>
                                    <span style={{    cursor: 'pointer',
                                        color: '#000',}}>  {classes.name}</span>
                                </div>

                            </td>
                            <td>
                                <div style={{display:'inline'}}>
                                    <span style={{    cursor: 'pointer',
                                        color: '#000',}}>  {classes.id_class}</span>
                                </div>
                            </td>


                            <td>

                                <div className="buttuns" style={{display:'inline-block', float:'right'}}>
                                    <button className="editClass" title="Редактировать" style={{
                                        touchAction: 'manipulation',
                                        border: 'none',
                                        background: 'none',
                                        borderRadius: '0',
                                        boxSizing: 'inherit',
                                        cursor:'pointer', textTransform: 'none',    overflow: 'visible',    margin: '0',
                                        //    color: 'inherit',
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit',
                                        lineHeight: 'inherit'}} data-toggle="modal" data-target="#editClass"
                                            data-whatever="@mdo">
                                        <i className="fa fa-edit" style={{    float: 'right',
                                            width: 'auto',
                                            height: 'auto',fontWeight: '900',
                                            color: '#f0783a',
                                            textShadow: '1px 1px 1px #ccc'}}  onClick={this.handleClick.bind(this, classes)} data-id={classes.id_groups}>

                                        </i>
                                    </button>
                                    <button className="deleteClass" title="Удалить" style={{
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
                                            textShadow: '1px 1px 1px #ccc'}} onClick={this.deleteClass.bind(this, classes.id_groups)} data-id={classes.id_groups}>

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
                <div className="modal fade" id="addClass" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Жаны класс кошуу</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/*<Row style={{display:'block'}} className={Row} md={2}>*/}
                                {/*    <div className={Col}>*/}
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Класстын аталышы</Form.Label>
                                        {/*<Form.Control placeholder='сабактын аталышын жазыныз ' value={this.state.lesson_name} onChange={ e=>this.setState({lesson_name:e.target.value })}/>*/}
                                        <Form.Text className="text-muted">
                                            крилица турундо киргизилсин!
                                        </Form.Text>
                                    </Form.Group>
                                    <input value={this.state.name} onChange={ e=>this.setState({name:e.target.value})}></input>
                                    <input value={this.state.id_class}  onChange={ e=>this.setState({id_class:e.target.value})}></input>



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
                                <button type="button" className="btn btn-primary" onClick={this.addClass}>Кошуу</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*MODAL FOR EDIT LESSON*/}
                <div className="modal fade" id="editClass" tabIndex="-1" role="dialog"
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
                                        <Form.Label>Класстын аталышы</Form.Label>
                                        {/*<Form.Control placeholder='сабактын аталышын жазыныз ' value={this.state.lesson_name} onChange={ e=>this.setState({lesson_name:e.target.value })}/>*/}
                                        <Form.Text className="text-muted">
                                            крилица турундо киргизилсин!
                                        </Form.Text>
                                    </Form.Group>
                                    <input style={{display:"block"}} value={this.state.editName} onChange={ e=>this.setState({editName:e.target.value})}></input>
                                    <input value={this.state.edit_id_class}  onChange={ e=>this.setState({edit_id_class:e.target.value})}></input>



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
                                <button type="button" className="btn btn-primary" onClick={this.editClass}>Кошуу</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Blocks;