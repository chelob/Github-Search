import React, { useState } from 'react'
import { InputGroup } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FormControlSearch, SearchButton, SearchBarContainer } from "../styles";

function SearchBar({placeHolder, label, value, onSearch, ...props}) {
    const [searchKey, setSearchKey] = useState(value);

    function handleSearch(e){
        if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)) {
            onSearch(searchKey);
        }
    }

    function handleChange(e){
        setSearchKey(e.target.value)
    }


    return <SearchBarContainer>
        <InputGroup className="mb-3">
            <FormControlSearch
                placeholder={placeHolder}
                aria-label={label}
                aria-describedby={label}
                autoFocus
                onChange={handleChange}
                onKeyUp={handleSearch}
                value={searchKey}
            />
            <SearchButton variant="primary" aria-label="search" onClick={handleSearch} disabled={searchKey.trim().length === 0}>
                <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
        </InputGroup>
    </SearchBarContainer>;
}

export default SearchBar;