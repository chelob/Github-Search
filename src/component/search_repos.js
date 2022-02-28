import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepos, clearSearchRepos } from '../store/actions/reposAction';
import { ClearButton, Title } from '../styles'
import SearchBar from './searchBar';
import RepoCard from './repo_card';
import Pagination from './pagination';


function SearchRepos() {

    const state = useSelector(state => { return { ...state.repos } });
    const dispatch = useDispatch();

    async function getRepos(keyword) {
        dispatch(searchRepos(keyword, state.reposPage));
    };

    async function clearRepos(e) {
        dispatch(clearSearchRepos());
    };

    function handlePrevious() {
        dispatch(searchRepos(state.reposKeyword, state.reposPage - 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleNext() {
        dispatch(searchRepos(state.reposKeyword, state.reposPage + 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div>
        <Title>Search Repositories</Title>
        <SearchBar placeHolder="Search Repositories" value='' onSearch={getRepos} label="Search Repositories" />
        {state?.repos?.items?.map((repo, index) => <RepoCard key={index} description={repo.description} topics={repo.topics} language={repo.language} name={repo.name} url={repo.html_url} />)}
        {state?.repos?.items?.length > 0 ? <Pagination currentPage={state.reposPage} onNext={handleNext} onPrevious={handlePrevious} totalPages={state.repos.total_count / 30} /> : null}
        {state?.repos?.items?.length > 0 ? <ClearButton onClick={clearRepos}>Clear Search</ClearButton> : null}
    </div>;
}

export default SearchRepos;