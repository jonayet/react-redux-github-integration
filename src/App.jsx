/**
 * Created by jonayet on 8/22/16.
 */
import React, {Component} from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store"
import RepositoryTable from "./RepositoryTable.jsx";

class App extends Component {
    render(){
        return(
            <div>
                <div>React Redux Github integration</div>
                <hr/>
                <RepositoryTable />
            </div>
        );
    }
}

const store1 = store();
ReactDom.render(
    <Provider store={store1}>
        <App/>
    </Provider>,
    document.getElementById("react-view")
);


