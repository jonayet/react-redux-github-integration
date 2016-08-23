/**
 * Created by jonayet on 8/22/16.
 */
import React, {Component, PropTypes} from "react";

class RepositoryRow extends Component {
    render(){
        const {name, url, language, stargazers_count, forks} = this.props.repository;
        return(
            <tr>
                <td>{name}</td>
                <td>{url}</td>
                <td>{language}</td>
                <td>{stargazers_count}</td>
                <td>{forks}</td>
            </tr>
        )
    }
}

RepositoryRow.propTypes = {
    repository: PropTypes.object.isRequired
};

export default RepositoryRow;