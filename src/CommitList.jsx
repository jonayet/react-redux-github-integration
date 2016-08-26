/**
 * Created by jonayet on 8/25/16.
 */
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import CommitSearchBox from "./CommitSearchBox.jsx";
import CommitRow from "./CommitRow.jsx";
import {fetchCommits} from "./actions";

class CommitList extends Component {
    componentDidMount(){
        const { dispatch, repository } = this.props;
        if(repository) {
            const commitsPerPage = 20;
            const commitsUrl = repository.commits_url.substring(0, repository.commits_url.indexOf('{'));
            dispatch(fetchCommits(commitsUrl + "?per_page=" + commitsPerPage));
        }
    }

    render(){
        const {repository, isFetching, commits, commitSearchText} = this.props;
        const repositoryName = repository ? repository.full_name : "";
        var rows = [];
        commits.forEach(function (commit) {
            const searchRegex = new RegExp(commitSearchText, "i");
            if (commitSearchText && !commit.commit.message.match(searchRegex))
                return;
            rows.push(<CommitRow key={commit.sha} commit={commit}/>);
        });
        const loading = isFetching ? <div>Loading....</div> : "";

        return(
            <div>
                <div>Repository: {repositoryName}</div>
                <CommitSearchBox/>
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
    commitSearchText: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { isFetching, selectedRepository, commits, commitSearchText } = state;
    return {
        isFetching,
        repository: selectedRepository,
        commits,
        commitSearchText
    }
}

export default connect(mapStateToProps)(CommitList);