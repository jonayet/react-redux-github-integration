/**
 * Created by jonayet on 8/22/16.
 */
import React, {Component} from "react";
import ReactDom from "react-dom";

class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                Hello React!
            </div>
        );
    }

}

ReactDom.render(
    <App/>,
    document.getElementById("react-view")
);


