import React, { useEffect } from 'react';
import GridWrapper from 'components/GridWrapper';
import UserCard from 'components/UserCard';
import useApiHook from 'hooks/useApi.hook';
import { getUsers } from 'utils/api';
import StyledPagination from 'components/StyledPagination';
import usePagination from 'hooks/usePagination.hook';
import LoadingIndicator from 'components/LoadingIndicator';

export default function Users() {
  const [usersState, requestUsers] = useApiHook(getUsers);
  const [page, pageCount, setPage] = usePagination(usersState.response?.data);

  useEffect(() => {
    requestUsers({ page: page - 1 });
  }, [page, requestUsers]);

  return (
    <>
      <h1>Users list</h1>
      {usersState.loading ? (
        <LoadingIndicator />
      ) : (
        <GridWrapper>
          {usersState.response?.data.data.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </GridWrapper>
      )}
      <StyledPagination
        count={pageCount}
        page={page}
        variant="outlined"
        color="primary"
        onChange={(p, value) => setPage(value)}
      />
    </>
  );
}
