/**
 * Created by jonayet on 8/22/16.
 */
import {
    REQUEST_REPOSITORIES,
    RECEIVE_REPOSITORIES,
    SELECT_REPOSITORY,
    REQUEST_COMMITS,
    RECEIVE_COMMITS,
    SEARCH_COMMITS,
    RESET_COMMITS,
    SET_NEXT_COMMITS_LINK
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
                commits: state.commits.concat(action.commits)
            });
        case SEARCH_COMMITS:
            return Object.assign({}, state, {
                commitSearchText: action.searchText
            });
        case RESET_COMMITS:
            return Object.assign({}, state, {
                isFetching: false,
                commits: [],
                nextCommitsLink: "",
            });
        case SET_NEXT_COMMITS_LINK:
            return Object.assign({}, state, {
                nextCommitsLink: action.url
            });
        default:
            return state
    }
}

export default repositories;