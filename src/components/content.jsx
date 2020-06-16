import React,{Component} from "react";
import MenuContainer from "./learning/MenuContainer";
import {Route} from "react-router-dom";
import Header from "./header";
import Index from "./index";
import About from "./about";
import Course from "./course";
class Content extends Component{
    render() {
        return (
            <div>
                <Header/>
                <div>
                <Route path="/" component={Index}/>
                <Route path="/about" component={About}/>
                <Route path="/schedules" component={Course}/>
                </div>
            </div>
        );
    }
}
export default Content