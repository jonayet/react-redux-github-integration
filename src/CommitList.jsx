/**
 * Created by jonayet on 8/25/16.
 */
import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import {Link} from "react-router";
import CommitRow from "./CommitRow.jsx";
import { fetchCommits } from './actions'

class CommitList extends Component {
    componentDidMount(){
        const { dispatch, repository } = this.props;
        if(repository) {
            const commitsUrl = repository.commits_url.substring(0, repository.commits_url.indexOf('{'));
            dispatch(fetchCommits(commitsUrl));
        }
    }

    render(){
        const {repository, isFetching, commits} = this.props;
        const repositoryName = repository ? repository.full_name : "";
        const rows = commits.map(function (commit) {
            return (<CommitRow key={commit.sha} commit={commit}/>);
        });
        const loading = isFetching ? <div>Loading....</div> : "";

        return(
            <div>
                <div>Repository: {repositoryName}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Message</th>
                            <th>Committer Name</th>
                            <th>Committer Email</th>
                            <th>Key</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                {loading}
                <div>
                    <Link to="/">Back</Link>
                </div>
            </div>
        )
    }
}

CommitList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    commits: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { isFetching, selectedRepository, commits } = state;
    return {
        isFetching,
        repository: selectedRepository,
        commits
    }
}

export default connect(mapStateToProps)(CommitList);