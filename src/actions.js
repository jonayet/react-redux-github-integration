/**
 * Created by jonayet on 8/22/16.
 */
import fetch from 'isomorphic-fetch';

export const REQUEST_REPOSITORIES = 'REQUEST_REPOSITORIES';
export const RECEIVE_REPOSITORIES = 'RECEIVE_REPOSITORIES';

function requestRepositories() {
    return {
        type: REQUEST_REPOSITORIES
    }
}

function receiveRepositories(data) {
    return {
        type: RECEIVE_REPOSITORIES,
        repositories: data.map(item => item)
    }
}

export function fetchRepositories() {
    return dispatch => {
        dispatch(requestRepositories());
        return fetch(`https://api.github.com/users/facebook/repos`)
            .then(response => response.json())
            .then(json => dispatch(receiveRepositories(json)))
    }
}