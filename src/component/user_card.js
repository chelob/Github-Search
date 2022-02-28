import React from 'react';
import { UserCardContainer, AvatarImage, UserInfo, UserName } from '../styles'

function UserCard({avatar, name, url, ...props}) {
    return <UserCardContainer>
        <AvatarImage src={avatar} />
        <UserInfo>
            <UserName href={url}>{name}</UserName>
        </UserInfo>
    </UserCardContainer>
}

export default UserCard;