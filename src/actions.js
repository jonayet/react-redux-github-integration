/**
 * Created by jonayet on 8/22/16.
 */
import fetch from 'isomorphic-fetch';

export const REQUEST_REPOSITORIES = 'REQUEST_REPOSITORIES';
export const RECEIVE_REPOSITORIES = 'RECEIVE_REPOSITORIES';
export const SELECT_REPOSITORY = 'SELECT_REPOSITORY';
export const REQUEST_COMMITS = 'REQUEST_COMMITS';
export const RECEIVE_COMMITS = 'RECEIVE_COMMITS';
export const SEARCH_COMMITS = 'SEARCH_COMMITS';

function requestRepositories() {
    return {
        type: REQUEST_REPOSITORIES
    }
}

function receiveRepositories(data) {
    return {
        type: RECEIVE_REPOSITORIES,
        repositories: data
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

export function selectedRepository(repository) {
    return {
        type: SELECT_REPOSITORY,
        repository: repository
    }
}

function requestCommits() {
    return {
        type: REQUEST_COMMITS
    }
}

function receiveCommits(data) {
    return {
        type: RECEIVE_COMMITS,
        commits: data
    }
}

export function fetchCommits(url) {
    return dispatch => {
        dispatch(requestCommits());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveCommits(json)))
    }
}

export function searchCommits(searchText) {
    return {
        type: SEARCH_COMMITS,
        searchText: searchText
    }
}