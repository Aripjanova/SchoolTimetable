import React from "react";
class B  extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            strike:0,

        }
        this.timeTrick=this.timeTrick.bind(this)
    }
    timeTrick() {
        this.setState({
          strike:this.state.strike+100,
        });
    }
    render() {
        var Bstyle ={
            backgroundColor:"red",
            border:"2px dotted black" ,
        }
        return (
            <>
            <div style={Bstyle}>
                <h1>I am B component</h1>
                { /* daughter element*/}
                <p> this is my props value:
                {
                    this.props.name
                }
                    {
                        this.props.bgcolor
                    }
                </p>

            </div>
            </>
        );
    }
}
export  default B;
