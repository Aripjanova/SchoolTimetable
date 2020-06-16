import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter, Switch
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Con from "./Con";
import MenuContainer from "./MenuContainer";
class Main extends Component {

    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA application</h1>
                <ul className="header">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/product">Product</NavLink></li>
                    <li><NavLink  to="/cont">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route path="/home" component={MenuContainer}/>

                    <Route path="/product" component={Stuff}/>
                    <Route path="/cont" component={Con}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main;