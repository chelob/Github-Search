import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers, clearSearchUsers } from '../store/actions/usersAction';
import { ClearButton, Title } from '../styles'
import SearchBar from './searchBar';
import UserCard from './user_card';
import Pagination from './pagination';


function SearchUsers() {

    const state = useSelector(state => { return { ...state.users } });
    const dispatch = useDispatch();

    async function getUsers(keyword) {
        dispatch(searchUsers(keyword, state.usersPage));
    };

    async function clearUsers(e) {
        dispatch(clearSearchUsers());
    };

    function handlePrevious() {
        dispatch(searchUsers(state.usersKeyword, state.usersPage - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleNext() {
        dispatch(searchUsers(state.usersKeyword, state.usersPage + 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div>
        <Title>Search Users</Title>
        <SearchBar placeHolder="Search Users" value={state.usersKeyword} onSearch={getUsers} label="Search Users" />
        {state?.users?.items?.map((user, index) => <UserCard key={index} avatar={user.avatar_url} name={user.login} url={user.html_url} />)}
        {state?.users?.items?.length > 0 ? <Pagination currentPage={state.usersPage} onNext={handleNext} onPrevious={handlePrevious} totalPages={state.users.total_count / 30} /> : null}
        {state?.users?.items?.length > 0 ? <ClearButton onClick={clearUsers}>Clear Search</ClearButton> : null}
    </div>;
}

export default SearchUsers;