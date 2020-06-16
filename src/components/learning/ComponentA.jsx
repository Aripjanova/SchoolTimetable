import React from "react";
class ComponentA extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        var CircleStyle={
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100,
        }

        return (
            <div style={CircleStyle}>

            </div>
        );
    }
}
export default ComponentA;