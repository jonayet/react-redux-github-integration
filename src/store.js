/**
 * Created by jonayet on 8/22/16.
 */
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import repositories from "./reducers";


export default function store() {
    const initialState = {
        isFetching: false,
        repositories: [],
        selectedRepository: null,
        commits: [],
        commitSearchText: "",
        nextCommitsLink: ""
    };

    return createStore(repositories, initialState,
        applyMiddleware(
            thunkMiddleware
        ));
}