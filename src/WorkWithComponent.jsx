import React from "react";
import B from "./Components"
class A  extends  React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log("Aloo why are you doesn't working")
        var Astyle= {
            padding: 10,
            margin: 10,
            backgroundColor: this.props.bgcolor,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,

            textAlign: "center",
        }


        return (
            <div style={Astyle}>
               <h1 >I am A component in component</h1>
                {this.props.children
                }
                <p>and my name is {this.props.name}</p>
                <B {...this.props}/>

            </div>
        );
    }

}
export default A;