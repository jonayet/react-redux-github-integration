/**
 * Created by jonayet on 8/22/16.
 */
import React, {Component} from "react";
import RepositoryRow from "./RepositoryRow.jsx";

class RepositoryTable extends Component {
    constructor(props){
        super(props);
    }

    render(){
        var rows = [];
        this.props.repositories.forEach(function(repository) {
            rows.push(<RepositoryRow key={repository.name} repository={repository}/>);
        }.bind(this));

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Url</th>
                            <th>Language</th>
                            <th>Stars</th>
                            <th>Forks</th>
                        </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RepositoryTable;