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

export const UserCardContainer = styled.div`
    display: flex;    
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    border: solid 1px #ced4da; 

    &:nth-child(2n){
        background-color: #ced4da;
    }

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

export const RepoCardContainer = styled.div`
    display: block;
    position: relative;
    width: 100%;
    border: solid 1px #ced4da; 

    &:nth-child(2n){
        background-color: #ced4da;
    }

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

