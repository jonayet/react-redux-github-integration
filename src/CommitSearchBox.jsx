/**
 * Created by jonayet on 8/25/16.
 */
import React, {Component} from "react";
import { connect } from "react-redux";
import {searchCommits} from "./actions";

class CommitSearchBox extends Component {
    handleKeystroke(event) {
        const { dispatch } = this.props;
        dispatch(searchCommits(event.target.value));
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    placeholder="Search commit..."
                    onChange={this.handleKeystroke.bind(this)}
                    className="form-control input-md"
                />
            </div>
        )
    }
}

export default connect()(CommitSearchBox);