import React from "react";
import ComponentA from "./ComponentA";
class ComponentC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}



  }
     callComponentA() {
        var renderData=[];
        var colors = ["#a7ff41", "#1e9d0c", "#ffcf2c", "#001a9d", "#9d023d"]
        for (var i = 0; i < colors.length; i++) {
            var color = colors[i];

            renderData.push(<ComponentA key={i + color} bgColor={colors[i]}/>)

        }

        return renderData  }
    render(){



        return(
            <div>       {this.callComponentA()}     </div>


        )
    }

}
export default ComponentC;