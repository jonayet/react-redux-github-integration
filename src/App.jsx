/**
 * Created by jonayet on 8/22/16.
 */
import React, {Component} from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store"
import RepositoryTable from "./RepositoryTable.jsx";
import CommitList from "./CommitList.jsx";
import {Router, Route, hashHistory} from "react-router";

class App extends Component {
    render(){
        return(
            <div>
                <h1>React Redux Github integration</h1>
                <RepositoryTable/>
                <div className="github-link" >
                    <label>GitHub: </label>
                    <a href="https://github.com/jonayet/react-redux-github-integration">https://github.com/jonayet/react-redux-github-integration</a>
                </div>
            </div>
        );
    }
}

const store1 = store();
ReactDom.render(
    <Provider store={store1}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/repository/:id" component={CommitList}/>
        </Router>
    </Provider>,
    document.getElementById("react-view")
);


