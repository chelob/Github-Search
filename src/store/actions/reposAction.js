import { SEARCH_REPOS, SEARCH_REPOS_ERROR, CLEAR_SEARCH_REPOS } from '../types'
import axios from 'axios'

export const searchRepos = (key, page) => async dispatch => {
    try {
        const res = await axios.get(`https://api.github.com/search/repositories?q=${key}${page?`&page=${page}`:''}`);
        dispatch({
            type: SEARCH_REPOS,
            payload: {reposKeyword: key, reposPage: page, ...res.data}
        });
    }
    catch (e) {
        dispatch({
            type: SEARCH_REPOS_ERROR,
            payload: console.log(e),
        });
    }
}


export const clearSearchRepos = () => async dispatch => {
    dispatch({
        type: CLEAR_SEARCH_REPOS
    })
} 
