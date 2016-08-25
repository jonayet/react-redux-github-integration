/**
 * Created by jonayet on 8/25/16.
 */
import React, {Component, PropTypes} from "react";
import CommitRow from "./CommitRow.jsx";


class CommitList extends Component {
    componentDidMount(){
        const {dispatch} = this.props;
        //dispatch();
    }

    render(){
        const {repository, isFetching, commits} = this.props;
        var rows = commits.map(function (commit) {
            return (<CommitRow key={commit.sha} commit={commit}/>);
        });

        return(
            <div>
                <div>Repository: {repository.full_name}</div>
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
            </div>
        )
    }
}

CommitList.propTypes = {
    repository: PropTypes.object.isRequired
};

export default CommitList;