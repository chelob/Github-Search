import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/about'
import SearchUsers from './component/search_users';
import SearchRepos from './component/search_repos';


function App() {
    return (
      <div className="App">
        <div className="container">
          <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/repos_search">Search Repositories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/users_search">Search Users</a>
                </li>
              </ul>
            </div>
          </nav>
          <Router>
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/users_search" element={<SearchUsers />} />
              <Route exact path="/repos_search" element={<SearchRepos />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }

export default App;