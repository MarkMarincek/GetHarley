import React, { useMemo } from 'react';
import { UserPreview } from 'models/interfaces';
import { getFullName } from 'utils/helpers';
import { UserInfoContainer } from './UserInfo.style';
import { DATE_FORMAT } from 'config';
import { format } from 'date-fns';

interface UserInfoProps {
  user: UserPreview;
  publishDate: string;
}
export default function UserInfo({ user, publishDate }: UserInfoProps) {
  const userFullName = getFullName(user);
  const timeOfPost = useMemo(() => {
    return format(new Date(publishDate), DATE_FORMAT);
  }, [publishDate]);

  return (
    <UserInfoContainer>
      <img src={user.picture} alt="User profile" />
      <div>
        <p>{userFullName}</p>
        <p>{timeOfPost}</p>
      </div>
    </UserInfoContainer>
  );
}
