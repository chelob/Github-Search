import styled from 'styled-components';
import { Button, FormControl } from 'react-bootstrap';

export const SearchBarContainer = styled.div`
    display: block;    
    position: relative;
    width: 100%;
`;

export const SearchButton = styled(Button)`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0;
    &:focus {
        box-shadow: none;
    }
`;

export const FormControlSearch = styled(FormControl)`
    &:focus {
        box-shadow: none;
        border-color: #ced4da;
    }
`;

export const UsersCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (min-width: 728px) {
        flex-direction: row;
    }
`;

export const UserCardContainer = styled.div`
    width: 100%;
    margin: 10px 0;

    @media only screen and (min-width: 728px) {
        width: 48%;
    }

    @media only screen and (min-width: 1024px) {
        width: 23%;
    }
`;

export const UserCardItem = styled.div`
    display: flex;    
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    border: solid 1px #ced4da; 
`;

export const AvatarImage = styled.img`
    width: 100px; 
    height: auto;
    margin: 10px;
    display: block;
    border-radius: 50px;
    border: solid 4px #ced4da; 
`;

export const UserInfo = styled.div`
    display: flex;    
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    justify-content: center;
`;

export const UserName = styled.a`
    color: #007bff;
    font-size: 22px;
    font-weight: bold;
`;

export const PaginationContainer = styled.div`
    display: block;    
    position: relative;
    width: 100%;
`;

export const PaginationButton = styled(Button)`
    margin: 10px;
    &:focus {
        box-shadow: none;
    }
`;

export const ClearButton = styled(Button)`
    margin: 10px;
    &:focus {
        box-shadow: none;
    }
`;

export const ReposCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (min-width: 728px) {
        flex-direction: row;
    }
`;

export const RepoCardContainer = styled.div`
    width: 100%;
    margin: 10px 0;

    @media only screen and (min-width: 728px) {
        width: 48%;
    }

    @media only screen and (min-width: 1024px) {
        width: 32%;
    }
    
`;

export const RepoCardItem = styled.div`
    display: flex;    
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    border: solid 1px #ced4da; 
`;

export const RepoInfo = styled.div`
    display: block;
    text-align: left;
    padding: 10px;
`;

export const RepoName = styled.a`
    display: block;    
    color: #007bff;
    font-size: 22px;
    text-align: left;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const RepoParagraph = styled.p`
    color: #000;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const Title = styled.h1`
    display: block;    
    color: #000;
    font-size: 35px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
    margin-top: 30px;
`;

export const AboutDescription = styled.p`
    color: #000;
    font-size: 16px;
    margin-bottom: 10px;
`;


export const FiltersContainer = styled.div`
    display: flex;
    justify-content: right;
    margin: 10px 0;
`;

export const LanguagesFilterSelect = styled.select`
    width: 200px;
    height: 35px;
    background: white;
    border-radius: 0.25rem;
    box-shadow: none;
    border-color: #ced4da;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        padding: 0px 2px 1px;
    }
`;

export const ClearFiltersButton = styled(Button)`
    &:focus {
        box-shadow: none;
    }
`;





