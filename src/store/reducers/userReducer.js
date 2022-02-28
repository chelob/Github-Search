import { SEARCH_USERS, CLEAR_SEARCH_USERS } from '../types'

const initialState = {
    users: [],
    usersPage: 1,
    usersKeyword: ''
}

 function userReducer (state = initialState, action) {

    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                usersPage: action.payload.usersPage,
                usersKeyword: action.payload.usresKeyword
            }

        case CLEAR_SEARCH_USERS:
            return {
                ...state,
                users: [],
                usersPage: 1,
                usersKeyword: ''
            }

        default: return state
    }

}

export default userReducer;