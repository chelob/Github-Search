import React from 'react';
import { RepoCardContainer, RepoInfo, RepoName, RepoParagraph} from '../styles'

function RepoCard({name, description, topics, url, language, ...props}) {
    return <RepoCardContainer>
        <RepoInfo>
            <RepoName href={url}>{name}</RepoName>
            <RepoParagraph>{description}</RepoParagraph>
            {language?<RepoParagraph><b>Languaje:</b> {language}</RepoParagraph>:null}
            {topics?<RepoParagraph><b>Topics:</b> {topics.join(', ')}</RepoParagraph>:null}
        </RepoInfo>
    </RepoCardContainer>
}

export default RepoCard;