/**
 * Created by jonayet on 8/22/16.
 */
import {
    REQUEST_REPOSITORIES,
    RECEIVE_REPOSITORIES
} from './actions'


function repositories(state = {
    isFetching: false,
    repositories: []
}, action) {
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
        default:
            return state
    }
}

export default repositories;