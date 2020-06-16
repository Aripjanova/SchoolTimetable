import React ,{Component} from "react";
import {
    Route,
    NavLink,
    HashRouter, Switch
} from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
class TNavbar extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <div>

                    <ul   className="nav nav-pills" role="tablist" >
                        {/*<li className="nav-item "><NavLink className="nav-link "   to="/schedules">Расписание </NavLink></li>*/}
                        <li className="nav-item "><NavLink className="nav-link "  to="/schedules/lessons">Предметтер </NavLink></li>
                        <li className="nav-item "><NavLink className="nav-link "   to="/schedules/classes">Класстар </NavLink></li>
                        <li className="nav-item "><NavLink className="nav-link "   to="/schedules/teachers">Мугалимдер </NavLink></li>
                        <li className="nav-item "><NavLink className="nav-link "   to="/schedules/rooms">Аудиториялар</NavLink></li>
                        <li className="nav-item "><NavLink className="nav-link "   to="/schedules/times">Сабак убактысы </NavLink></li>
                        <li className="nav-item "><NavLink className="nav-link "   to="/schedules/blocks">Сабак блогу</NavLink></li>
                    </ul>

                    <DropdownButton style={{ float:'right'}} id="dropdown-basic-button" title="Расписание">
                        <Dropdown.Item ><NavLink className="nav-link "  to="/schedules/allsch">Предметтер </NavLink></Dropdown.Item>
                        <Dropdown.Item><NavLink className="nav-link "  to="/schedules/tchsch">Мугалим рас</NavLink></Dropdown.Item>
                        <Dropdown.Item  ><NavLink className="nav-link "  to="/schedules/stdsch">Класс рас</NavLink></Dropdown.Item>
                    </DropdownButton>

                </div>


            </div>
        );
    }
}
export  default TNavbar