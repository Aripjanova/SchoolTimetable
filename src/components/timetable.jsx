import React ,{Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Form,Table, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import Axios from "axios";
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Grid } from 'react-bootstrap';
import TNavbar from "./adminTimetable/navbar";
import About from "./about";
import Teacher from "./teacher";
import Blog from "./blog";
import Event from "./event";
import Contact from "./contact";
import Index from "./index";
import Classes from "./adminTimetable/classes";
import Lessons from "./adminTimetable/lessons";
import TeacherList from "./adminTimetable/teacherList";
import Room from "./adminTimetable/Room";
import Time from "./adminTimetable/time";
import Blocks from "./adminTimetable/blocks";
import Scheduler from "./adminTimetable/schedule";
class Timetable extends Component{
    constructor(props) {
        super(props);
        this.state={
            lessons:[],
            classes:[],

            lesson_name:'l',
            lesson_room:'l',
            number_class:'',
            alph_class:'',

        }

    }
    componentDidMount()
    {
        const script = document.createElement("script");

        script.src = "/my-app/public/assets/js/jquery.min";
        //   <script src="assets/js/jquery.min.js"></script>
        script.src="assets/js/jquery-migrate-3.0.1.min.js";
        script.src="assets/js/popper.min.js";
        script.src="assets/js/bootstrap.min.js";
        script.src="assets/js/jquery.easing.1.3.js";
        script.src="assets/js/jquery.waypoints.min.js";
        script.src="assets/js/jquery.stellar.min.js";
        script.src="assets/js/owl.carousel.min.js";
        script.src="assets/js/jquery.magnific-popup.min.js";
        script.src="assets/js/aos.js";
        script.src="assets/js/jquery.animateNumber.min.js";
        script.src="assets/js/bootstrap-datepicker.js";
        script.src="assets/js/jquery.timepicker.min.js";
        script.src="assets/js/scrollax.min.js";
        script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false";
        script.src="assets/js/google-map.js";
        script.src="assets/js/main.js";
        //<script.src="assets/js/jquery.min.js"></script>

        // script.async = true;

        document.body.appendChild(script);
    }

    //
    // getClasses= _ =>{
    //     fetch('http://localhost:3001/classes')
    //         .then(response => response.json())
    //         .then(response=>this.setState({classes:response.data}))
    //         .catch(err=>console.log(err))
    // }

    addLesson= _ =>{
    const lesson_name=this.state.lesson_name;
        const lesson_room=this.state.lesson_room;
    fetch(`http://localhost:3001/lesson/add?lesson_name=${lesson_name}&lesson_room=${lesson_room}`)
        // http://localhost:4000/classes/add?number_class=3&alph_class=B
        // .then(response=>response.json() )
        .then(this.getLessons)
        .catch(err=>console.log(err))
    }
    addClass=_=>{
        const number_class=this.state.number_class;
        const alph_classs=this.state.alph_class;
        fetch(`http://localhost:4000/class/add?number_class=${number_class}&alph_classs=${alph_classs}`)
            .then(this.getClasses)
            .catch(err=>console.log(err))
    }
    EditLesson(a){
    console.log("AIZADAD"+a)
    }
    // renderClasses(idclasses,number_class,alph_classes){
    //     return <div key={idclasses}>{number_class}{alph_classes}</div>

    render() {

        // // const content = this.state.lessons.map((lesson,i) =>
        //     <tr>
        //         <th scope="row" key={lesson.id}>i</th>
        //         <td>{lesson.lesson_name}</td>
        //         <td>{lesson.lesson_room}</td>
        //
        //     </tr>,
        //
        //
        // );
        return(
            <Router>
                <div style={{marginLeft:'20px',marginRight:'20px'}}>

                    <TNavbar/>

                    <Switch>

                        {/*<Route path="/schedules/teachers">*/}
                        {/*    <Teachers />*/}
                        {/*</Route>*/}
                        <Route path="/schedules/classes">
                            <Classes/>
                        </Route>
                        <Route path="/schedules/teachers">
                            <TeacherList/>
                        </Route>
                        <Route path="/schedules/rooms">
                            <Room/>
                        </Route>
                        <Route path="/schedules/times">
                            <Time/>
                        </Route>
                        <Route path="/schedules/allsch">
                            <Time/>
                        </Route>
                        <Route path="/schedules/tchsch">
                            <Scheduler/>
                        </Route>
                        <Route path="/schedules/stdsch">
                            <Time/>
                        </Route>
                        <Route path="/schedules/blocks">
                            <Blocks/>
                        </Route>
                        <Route path="/schedules/lessons">
                            <Lessons/>
                        </Route>
                        {/*<Route path="/schedules">*/}
                        {/*    <Timetable />*/}
                        {/*</Route>*/}
                    </Switch>

                    {/*<Form>*/}
                    {/*    <Form.Row>*/}
                    {/*        <Form.Group as={Col} controlId="formGridEmail">*/}
                    {/*            <Form.Label>Email</Form.Label>*/}
                    {/*            <Form.Control type="email" placeholder="Enter email" />*/}
                    {/*        </Form.Group>*/}

                    {/*        <Form.Group as={Col} controlId="formGridPassword">*/}
                    {/*            <Form.Label>Password</Form.Label>*/}
                    {/*            <Form.Control type="password" placeholder="Password" />*/}
                    {/*        </Form.Group>*/}
                    {/*    </Form.Row>*/}

                    {/*    <Form.Group controlId="formGridAddress1">*/}
                    {/*        <Form.Label>Address</Form.Label>*/}
                    {/*        <Form.Control placeholder="1234 Main St" />*/}
                    {/*    </Form.Group>*/}

                    {/*    <Form.Group controlId="formGridAddress2">*/}
                    {/*        <Form.Label>Address 2</Form.Label>*/}
                    {/*        <Form.Control placeholder="Apartment, studio, or floor" />*/}
                    {/*    </Form.Group>*/}

                    {/*    <Form.Row>*/}
                    {/*        <Form.Group as={Col} controlId="formGridCity">*/}
                    {/*            <Form.Label>City</Form.Label>*/}
                    {/*            <Form.Control />*/}
                    {/*        </Form.Group>*/}

                    {/*        <Form.Group as={Col} controlId="formGridState">*/}
                    {/*            <Form.Label>State</Form.Label>*/}
                    {/*            <Form.Control as="select" value="Choose...">*/}
                    {/*                <option>Choose...</option>*/}
                    {/*                <option>...</option>*/}
                    {/*            </Form.Control>*/}
                    {/*        </Form.Group>*/}

                    {/*        <Form.Group as={Col} controlId="formGridZip">*/}
                    {/*            <Form.Label>Zip</Form.Label>*/}
                    {/*            <Form.Control />*/}
                    {/*        </Form.Group>*/}
                    {/*    </Form.Row>*/}

                    {/*    <Form.Group id="formGridCheckbox">*/}
                    {/*        <Form.Check type="checkbox" label="Check me out" />*/}
                    {/*    </Form.Group>*/}

                    {/*    <Button variant="primary" type="submit">*/}
                    {/*        Submit*/}
                    {/*    </Button>*/}
                    {/*</Form>*/}
                    {/*<Button variant="info">Info</Button>{' '}*/}
                    {/*<Button variant="outline-info">Info</Button>{' '}*/}
                    {/*<div>*/}
                    {/*    /!*{this.state.lessons.map((classe)=>*!/*/}
                    {/*    /!*    <li>{classe.number_class}{EditLesson(classe.id_lesson)}*!/*/}
                    {/*    /!*{classe.alph_class}</li>)      }*!/*/}
                    {/*</div>*/}




                </div>

            </Router>

        )
    }

}
export  default Timetable