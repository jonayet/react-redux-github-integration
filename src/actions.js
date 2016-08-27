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
export const RESET_COMMITS = 'RESET_COMMITS';
export const SET_NEXT_COMMITS_LINK = 'SET_NEXT_COMMITS_LINK';

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
        return fetch("https://api.github.com/users/jonayet/repos")
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

export function requestCommits() {
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

function getNextCommitsLink(linkHeader) {
    let nextLink = "";
    let lastLink = "";
    if(!linkHeader) return nextLink;
    const links = linkHeader.split(',');
    for(let i = 0; i < links.length; i++){
        const link = links[i];
        if(link.match(/rel="last"/)) {
            const linkMatch = link.match(/<[^>]+/);
            if(linkMatch) {
                lastLink = linkMatch[0].substring(1);
            }
        }
        if(link.match(/rel="next"/)) {
            const linkMatch = link.match(/<[^>]+/);
            if(linkMatch) {
                const link = linkMatch[0].substring(1);
                if(link != lastLink)
                    nextLink = link;
                break;
            }
        }
    }
    return nextLink;
}

export function fetchCommits(url, isInitialFetch) {
    const commitsPerPage = 20;
    const commitsUrl = url + (isInitialFetch ? `?page=1&per_page=${commitsPerPage}` : "");
    return dispatch => {
        let nextLink = "";
        dispatch(requestCommits());
        return fetch(commitsUrl)
            .then(response => {
                var linkHeader = response.headers.get("Link");
                nextLink = getNextCommitsLink(linkHeader);
                return response.json();
            })
            .then(json => dispatch(receiveCommits(json)))
            .then(()=>{
                dispatch(setNextCommitsLink(nextLink));
            });
    }
}

export function searchCommits(searchText) {
    return {
        type: SEARCH_COMMITS,
        searchText: searchText
    }
}

export function setNextCommitsLink(url) {
    return {
        type: SET_NEXT_COMMITS_LINK,
        url: url
    }
}

export function resetCommits() {
    return {
        type: RESET_COMMITS
    }
}