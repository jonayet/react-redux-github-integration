/**
 * Created by jonayet on 8/25/16.
 */
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import CommitSearchBox from "./CommitSearchBox.jsx";
import CommitRow from "./CommitRow.jsx";
import {fetchCommits} from "./actions";
import Waypoint from "react-waypoint";


class CommitList extends Component {
    loadCommits(){
        const { dispatch, isFetching, repository, commits, nextCommitsLink } = this.props;
        if(!repository || isFetching) return;
        const commitsBaseUrl = repository.commits_url.substring(0, repository.commits_url.indexOf('{'));
        const commitsUrl = commits.length == 0 ? commitsBaseUrl : nextCommitsLink;
        if(!commitsUrl) return;
        const isInitialFetch = commits.length == 0;
        dispatch(fetchCommits(commitsUrl, isInitialFetch));
    }

    renderWaypoint() {
        return (
            <Waypoint
                onEnter={this.loadCommits.bind(this)}
                threshold={2.0}
            />
        );
    }

    render(){
        const {repository, isFetching, commits, searchText} = this.props;
        const repositoryName = repository ? repository.full_name : "";
        const rows = commits.filter(function (commit) {
            return !searchText || commit.commit.message.match(new RegExp(searchText, "i"));
        }).map(function (commit) {
            return(<CommitRow key={commit.sha} commit={commit}/>);
        });
        const loading = isFetching ? <div>Loading....</div> : "";

        return(
            <div>
                <div>Repository: {repositoryName}</div>
                <div>
                    <Link to="/">Back</Link>
                </div>
                <CommitSearchBox/>
                <div style={{overflow: 'auto', maxHeight: 400}}>
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
                    {this.renderWaypoint()}
                </div>
                {loading}
            </div>
        )
    }
}

CommitList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    commits: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired,
    nextCommitsLink: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { isFetching, selectedRepository, commits, commitSearchText, nextCommitsLink } = state;
    return {
        isFetching,
        repository: selectedRepository,
        commits,
        nextCommitsLink,
        searchText: commitSearchText
    }
}

export default connect(mapStateToProps)(CommitList);