/**
 * Created by jonayet on 8/22/16.
 */
import React, {Component} from "react";
import ReactDom from "react-dom";
import RepositoryTable from "./RepositoryTable.jsx";

class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <RepositoryTable repositories={[
                    {
                        name: "name1",
                        url: "url1",
                        lang: "lang1",
                        stars: "star1",
                        forks: "fork1"
                    },
                    {
                        name: "name2",
                        url: "url2",
                        lang: "lang2",
                        stars: "star2",
                        forks: "fork2"
                    },
                    {
                        name: "name3",
                        url: "url3",
                        lang: "lang3",
                        stars: "star3",
                        forks: "fork3"
                    }
                ]}/>
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("react-view")
);


