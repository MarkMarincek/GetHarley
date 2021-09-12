import React, { useCallback, useMemo } from 'react';
import { UserPreview } from 'models/interfaces';
import { fillArgumentsForPath, getFullName } from 'utils/helpers';
import { UserInfoContainer } from './UserInfo.style';
import { DATE_FORMAT } from 'config';
import { format } from 'date-fns';
import { useHistory } from 'react-router';
import { ROUTES } from 'routes/constants';

interface UserInfoProps {
  user: UserPreview;
  publishDate: string;
}
export default function UserInfo({ user, publishDate }: UserInfoProps) {
  const history = useHistory();
  const userFullName = getFullName(user);
  const postsLink = useMemo(() => fillArgumentsForPath(ROUTES.USER_POSTS, user.id), [user.id]);
  const timeOfPost = useMemo(() => {
    return format(new Date(publishDate), DATE_FORMAT);
  }, [publishDate]);

  function handleProfilePictureClick() {
    history.push(postsLink);
  }

  return (
    <UserInfoContainer>
      <img src={user.picture} alt="User profile" onClick={handleProfilePictureClick} />
      <div>
        <p>{userFullName}</p>
        <p>{timeOfPost}</p>
      </div>
    </UserInfoContainer>
  );
}
