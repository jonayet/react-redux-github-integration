/**
 * Created by jonayet on 8/22/16.
 */
import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import { fetchRepositories } from './actions'
import RepositoryRow from "./RepositoryRow.jsx";

class RepositoryTable extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchRepositories());
    }

    render() {
        const { isFetching, repositories } = this.props;
        const rows = repositories.map(function (repository) {
            return(<RepositoryRow key={repository.name} repository={repository}/>);
        });
        const loading = isFetching ? <div>Loading....</div> : "";

        return(
            <div>
                <table className="table table-hover">
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
                {loading}
            </div>
        )
    }
}

RepositoryTable.propTypes = {
    repositories: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { isFetching, repositories } = state;
    return {
        isFetching,
        repositories
    }
}

export default connect(mapStateToProps)(RepositoryTable);