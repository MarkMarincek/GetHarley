import GridWrapper from 'components/GridWrapper';
import StyledCard from 'components/StyledCard';
import UserCard from 'components/UserCard';
import useApiHook from 'hooks/useApi.hook';
import React, { useEffect } from 'react';
import { getUsers } from 'utils/api';

export default function Users() {
  const [data, requestUsers] = useApiHook(() => getUsers());

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <>
      <h1>Users list</h1>
      <div>
        <GridWrapper>
          {data.response?.data.data.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </GridWrapper>
      </div>
    </>
  );
}
