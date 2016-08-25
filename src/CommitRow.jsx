/**
 * Created by jonayet on 8/25/16.
 */
import React, {Component, PropTypes} from "react";

class Commit extends Component {
    render(){
        const {message, committer} = this.props.commit.commit;
        const key = this.props.commit.sha;

        return(
            <tr>
                <td>{message}</td>
                <td>{committer.name}</td>
                <td>{committer.email}</td>
                <td>{key}</td>
            </tr>
        )
    }
}

Commit.propTypes = {
    commit: PropTypes.object.isRequired
};

export default Commit;