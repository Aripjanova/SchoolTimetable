import React, {Component} from "react";
import {Form,Table, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
class Scheduler extends Component{
    constructor() {
        super();
        this.state = {
            schedule:[],
            id_block: [],
            day: '',
            hour:'',
            group:'',
            teacher: ''


        }
        // this.deleteClass = this.deleteClass.bind(this);
    }
    componentDidMount(){

        this.getSchedule();
        console.log(this.state.search)
    }
    getSchedule=_=>{
        fetch('https://localhost:5001/api/scheduler/')
            .then(response => response.json())
            .then(response=>this.setState({schedule:response}))
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
    /*SortingandShowing=()=>{
     let sch=this.state.schedule;
     let sch2;

        for (var day = 0; day < 6; day++)
        {
            <td>day {day}</td>
            for (var hour = 0; hour < 6; hour++)
            {


                <td>hour {hour}</td>
                this.state.schedule.forEach( p=>{
                    <th>{p.group}</th>
                    <th>{p.teacher}</th>
                })
            }


        }
}
*/
    render() {
        // console.log(this.state.classes)
        return (
            <div>
                {/*<table className="table table-striped">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}

                {/*        <th scope="col">	 ID</th>*/}
                {/*        <th scope="col">Аты</th>*/}
                {/*        <th scope="col">Фамилиясы</th>*/}
                {/*        <th scope="col"><button type='button' className="btn btn-primary" data-toggle="modal" data-target="#addTeacher"*/}
                {/*                                data-whatever="@mdo"> Мугалим кошуу</button></th>*/}
                {/*        <th scope="col" ><button type='button' className="btn btn-primary" onClick={this.deleteAllClass}>Баарын очуруу </button> </th>*/}

                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {this.state.schedule.map(schedule  => (*/}
                {/*        <tr key={schedule.day}>*/}
                {/*            <tr>*/}
                {/*            <td>*/}
                {/*                <div style={{display:'inline'}}>*/}
                {/*                    <span style={{    cursor: 'pointer',*/}
                {/*                        color: '#000',}}>  {schedule.day+1}</span>*/}
                {/*                </div>*/}
                {/*            </td>*/}
                {/*            </tr>*/}
                {/*        <tr>*/}

                {/*            <td>*/}
                {/*                <div style={{display:'inline'}}>*/}
                {/*                    <span style={{    cursor: 'pointer',*/}
                {/*                        color: '#000',}}>  {schedule.hour+1}</span>*/}
                {/*                </div>*/}

                {/*            </td>*/}
                {/*        </tr>*/}
                {/*            <td>*/}
                {/*                <div style={{display:'inline'}}>*/}
                {/*                    <span style={{    cursor: 'pointer',*/}
                {/*                        color: '#000',}}>  {schedule.group}</span>*/}
                {/*                </div>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                <div style={{display:'inline'}}>*/}
                {/*                    <span style={{    cursor: 'pointer',*/}
                {/*                        color: '#000',}}>  {schedule.teacher}</span>*/}
                {/*                </div>*/}
                {/*            </td>*/}


                {/*            <td>*/}

                {/*            </td>*/}

                {/*            <td></td>*/}
                {/*        </tr>*/}
                {/*    ))}*/}



                {/*    </tbody>*/}
                {/*</table>*/}
                <div style={{margin:"50px"}}>
                    <div>7А </div><span>класстын сабактарынын планы</span>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Сааттар</th>
                            <th>Дүйшөнбү</th>
                            <th>Шаршенби</th>
                            <th>Шейшинби</th>
                            <th>Бейшенби</th>
                            <th>Жума</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td><div>биология</div><div>Айнура Дыйканова</div><div>1</div></td>
                            <td><div>математика</div><div>Жылдыз Танатарова</div><div>1</div></td>
                            <td><div>англис тили</div><div>Жазгул Сариева</div><div>1</div></td>
                            <td><div>англис тили</div><div>Жазгул Сариева</div><div>1</div></td>
                            <td><div>Сурот </div><div>Жылдыз Абдыкаимова</div><div>1</div></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td><div>информатика</div><div>Толгонай Абдрасулова</div><div>1</div></td>
                            <td><div>русский язык</div><div>Тотукан Акбаева</div><div>1</div></td>
                            <td><div>кыргыз тили</div><div>Хиллола Алисултанова</div><div>1</div></td>
                            <td><div>коом</div><div>Гулназ Орозбаева</div><div>1</div></td>
                            <td><div>адабият </div><div>Хилола Алисултанова</div><div>1</div></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td><div>география</div><div>М</div><div>17</div></td>
                            <td><div>литература</div><div>Тотукан Акбаева</div><div>1</div></td>
                            <td><div>математика</div><div>Жылдыз Танатарова</div><div>1</div></td>
                            <td><div>орус тили</div><div>Тотукан Акбаева</div><div>1</div></td>
                            <td><div>эмгек</div><div>Толгонай Абдрасулова</div><div>1</div></td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td><div>русский язык </div><div>Тотукан Акбаева</div><div>1</div></td>
                            <td><div>кыргыз тили</div><div>Хилола Алисултанова</div><div>1</div></td>
                            <td><div>тарых</div><div>Гулназ орозбаева</div><div>1</div></td>
                            <td><div>адабият</div><div>Айнура Дыйканова</div><div>1</div></td>
                            <td><div>дене тарбия </div><div>Сагын Туратбаев</div><div>17</div></td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td><div>дене тарбия</div><div>Сагын Туратбаев</div><div>17</div></td>
                            <td><div>музыка</div><div>Махмуд Каракозуев</div><div>1</div></td>
                            <td><div>геометрия</div><div>Жылдыз Танатарова</div><div>1</div></td>
                            <td><div>Сурот </div><div>А Абдыкаимова</div><div>1</div></td>
                        </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        );
    }
}
export default Scheduler;