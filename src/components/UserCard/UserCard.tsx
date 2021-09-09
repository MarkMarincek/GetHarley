import { Button } from '@material-ui/core';
import StyledCard from 'components/StyledCard';
import { UserPreview } from 'models/interfaces';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes/constants';
import { capitalizeFirstLetter, fillArgumentsForPath } from 'utils/helpers';
import { UserCardContainer, UserCardContentSection, UserCardImg } from './UserCard.style';

interface UserCardProps {
  user: UserPreview;
}
export default function UserCard(props: UserCardProps) {
  const { picture, title, lastName, firstName, id } = props.user;

  const profileLink = useMemo(() => fillArgumentsForPath(ROUTES.USER_PROFILE, id), [id]);
  const postsLink = useMemo(() => fillArgumentsForPath(ROUTES.USER_POSTS, id), [id]);

  return (
    <StyledCard>
      <UserCardContainer>
        <UserCardImg src={picture} />
        <UserCardContentSection>
          <h3>
            {capitalizeFirstLetter(title)}. {firstName} {lastName}
          </h3>
          <Button component={Link} to={profileLink} variant="contained" color="primary">
            View profile
          </Button>
          <Button component={Link} to={postsLink} variant="contained">
            View posts
          </Button>
        </UserCardContentSection>
      </UserCardContainer>
    </StyledCard>
  );
}
