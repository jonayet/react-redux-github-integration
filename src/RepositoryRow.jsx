/**
 * Created by jonayet on 8/22/16.
 */
import React, {Component, PropTypes} from "react";
import {hashHistory} from "react-router";
import {connect} from "react-redux";
import {selectedRepository, fetchCommits} from './actions'

class RepositoryRow extends Component {
    handleClick(repository) {
        hashHistory.push("/repository/" + repository.id);
        const { dispatch } = this.props;
        dispatch(selectedRepository(repository));
    }

    render(){
        const {name, url, language, stargazers_count, forks} = this.props.repository;
        return(
            <tr onClick={this.handleClick.bind(this, this.props.repository)}>
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

export default connect()(RepositoryRow);