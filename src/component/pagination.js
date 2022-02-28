import React from 'react';
import {PaginationContainer, PaginationButton} from '../styles'

function Pagination({currentPage, onPrevious, onNext, totalPages, ...props}) {
    return <PaginationContainer>
        <PaginationButton onClick={onPrevious} disabled={currentPage === 1}>Prev</PaginationButton>
        <PaginationButton onClick={onNext} disabled={Math.ceil(totalPages) === currentPage}>Next</PaginationButton>
    </PaginationContainer>
}

export default Pagination;