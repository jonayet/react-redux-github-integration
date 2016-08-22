/**
 * Created by jonayet on 8/22/16.
 */
import React, {Component} from "react";

class RepositoryRow extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr>
                <td>{this.props.repository.name}</td>
                <td>{this.props.repository.url}</td>
                <td>{this.props.repository.language}</td>
                <td>{this.props.repository.stars}</td>
                <td>{this.props.repository.forks}</td>
            </tr>
        )
    }
}

export default RepositoryRow;