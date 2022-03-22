import React from 'react';
import { RepoCardContainer, RepoCardItem, RepoInfo, RepoName, RepoParagraph } from '../styles'

function RepoCard({ name, description, topics, url, language, ...props }) {
    return <RepoCardContainer>
        <RepoCardItem>
            <RepoInfo>
                <RepoName href={url}>{name}</RepoName>
                <RepoParagraph>{description}</RepoParagraph>
                {language ? <RepoParagraph><b>Languaje:</b> {language}</RepoParagraph> : null}
                {topics ? <RepoParagraph><b>Topics:</b> {topics.join(', ')}</RepoParagraph> : null}
            </RepoInfo>
        </RepoCardItem>
    </RepoCardContainer>
}

export default RepoCard;