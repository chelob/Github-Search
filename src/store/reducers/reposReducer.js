import { SEARCH_REPOS, CLEAR_SEARCH_REPOS } from '../types'

const initialState = {
    repos: [],
    reposPage: 1,
    reposKeyword: ''
}

function reposReducer (state = initialState, action) {

    switch (action.type) {
        case SEARCH_REPOS:
            return {
                ...state,
                repos: action.payload,
                reposPage: action.payload.reposPage,
                reposKeyword: action.payload.reposKeyword
            }

        case CLEAR_SEARCH_REPOS:
            return {
                ...state,
                repos: [],
                reposPage: 1,
                reposKeyword: ''
            }

        default: return state
    }

}

export default reposReducer;