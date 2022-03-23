import { SEARCH_USERS, SEARCH_USERS_ERROR, CLEAR_SEARCH_USERS } from '../types'
import axios from 'axios'

export const searchUsers = (key, page) => async dispatch => {
    try {
        const res = await axios.get(`https://api.github.com/search/users?q=${key}${page?`&page=${page}`:''}&per_page=32`);
        dispatch({
            type: SEARCH_USERS,
            payload: {usresKeyword: key, usersPage: page, ...res.data}
        });
    }
    catch (e) {
        dispatch({
            type: SEARCH_USERS_ERROR,
            payload: console.log(e),
        });
    }
}

export const clearSearchUsers = () => async dispatch => {
    dispatch({
        type: CLEAR_SEARCH_USERS
    })
} 