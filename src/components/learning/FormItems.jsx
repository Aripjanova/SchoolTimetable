import React,{Component} from "react";
import FlipMove from 'react-flip-move';
export class FormInputItems  extends Component{

    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                   key={item.key}>{item.text}</li>
    }
    delete(key) {
        this.props.delete(key);
    }
    render() {
        var todoEntries = this.props.items;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
};