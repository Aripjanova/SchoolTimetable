import React, {Component} from "react";
import MenuButton from "./MenuButton"
import Menu from "./Menu"
import axios from 'axios';
class MenuContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            Category:"",
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    toggleMenu() {


        this.setState({
            visible:!this.state.visible
        });
    }
    handleClick(){
        axios.get('https://nurlida.herokuapp.com/category/').then(res => {
           const category = res.data;

            console.log(category);
            this.setState({
                Category: category,
            });

    })}
    handleMouseDown(e){
        this.toggleMenu();
        console.log("clicked");
        e.stopPropagation();
    }
    render() {
        console.log("Rendering:MenuContainer")
        return (
            <div>
                <div  onClick={this.handleClick}>
                    <div onClick={this.getCategory}>Allo</div>


                    <MenuButton handleMouseDown={this.handleMouseDown}/>
                    <Menu handleMouseDown={this.handleMouseDown}
                          menuVisibility={this.state.visible} />
                    <p>you can find here
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit</li>
                            <li>Bumblebees</li>
                            <li>Aenean</li>
                            <li>Consectetur</li>
                        </ul>

                    </p>

                </div>
            </div>
        );
    }
}
export default MenuContainer;