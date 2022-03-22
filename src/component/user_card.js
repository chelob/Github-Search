import React from 'react';
import { UserCardContainer, AvatarImage, UserInfo, UserName, UserCardItem } from '../styles'

function UserCard({ avatar, name, url, ...props }) {
    return <UserCardContainer>
        <UserCardItem>
            <AvatarImage src={avatar} />
            <UserInfo>
                <UserName href={url}>{name}</UserName>
            </UserInfo>
        </UserCardItem>
    </UserCardContainer>
}

export default UserCard;