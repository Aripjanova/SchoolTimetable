import React from "react";
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count:0,
        }
        console.log('this in constructor'+this)
        this.adder= this.adder.bind(this)
        this.Subtractor=this.Subtractor.bind(this)
      //  this.increase=this.increase.bind(this)

    }

    adder(e) {
        console.log('this in adder '+this)
        this.setState({
            countt:this.state.count++
        });

    }

    Subtractor(e){
        // this.setState({
        //     count:this.state.count--,
        // })
        this.setState((state, props) => ({
            countt: state.count --
        }));
    }
    render() {

        var ButtonStyle={
            width:"40px",
            height:"30px",
            margin:"20px",
            color:"black",
            backgroundColor:"yellow",
        }
        var CardStyle={
            width: "60px",
            height: "60px",
            textAlign:"center",
            margin:"20px auto",
            color:"yellow",
            backgroundColor: "green"

        }
        return (
            <>
            <div>
                <div style={CardStyle}>
                    {
                        this.state.count
                    }
                </div>


                <button style={ButtonStyle} onClick={this.adder}>+</button>
                <button style={ButtonStyle} onClick={this.Subtractor}>-</button>
            </div>
                </>
        );
    }
}
export default Counter