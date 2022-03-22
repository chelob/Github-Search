import React from 'react';
import { LanguagesFilterSelect, ClearFiltersButton, FiltersContainer } from '../styles'

function UserCard({ filterOptions, applyFilter, clearFilter, ...props }) {
    console.log(filterOptions.length);
    return <FiltersContainer>
        {filterOptions.length>1 ? <LanguagesFilterSelect onChange={(e) => applyFilter(e.target.value)}>
            <option value=''>Filter By Language</option>
            {filterOptions.map((option, index) => <option value={option} key={index}>{option}</option>)}
        </LanguagesFilterSelect>:<ClearFiltersButton onClick={()=>clearFilter()}>Clear Language Filter</ClearFiltersButton>}
    </FiltersContainer>;
}

export default UserCard;