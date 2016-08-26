/**
 * Created by jonayet on 8/22/16.
 */
import {
    REQUEST_REPOSITORIES,
    RECEIVE_REPOSITORIES,
    SELECT_REPOSITORY,
    REQUEST_COMMITS,
    RECEIVE_COMMITS
} from './actions'


function repositories(state = {}, action) {
    switch (action.type) {
        case REQUEST_REPOSITORIES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_REPOSITORIES:
            return Object.assign({}, state, {
                isFetching: false,
                repositories: action.repositories
            });
        case SELECT_REPOSITORY:
            return Object.assign({}, state, {
                selectedRepository: action.repository
            });
        case REQUEST_COMMITS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_COMMITS:
            return Object.assign({}, state, {
                isFetching: false,
                commits: action.commits
            });
        default:
            return state
    }
}

export default repositories;