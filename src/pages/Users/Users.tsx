import React, { useEffect } from 'react';
import GridWrapper from 'components/GridWrapper';
import UserCard from 'components/UserCard';
import useApiHook from 'hooks/useApi.hook';
import { getUsers } from 'utils/api';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory, useLocation } from 'react-router';
import StyledPagination from 'components/StyledPagination';

export default function Users() {
  const location = useLocation();
  const history = useHistory();

  const [data, requestUsers] = useApiHook(() => getUsers());

  useEffect(() => {
    requestUsers();
  }, []);

  useEffect(() => {
    const sp = new URLSearchParams(location.search);
    console.log(sp.has('page'), sp.get('page'), sp.values());
    console.log(location.search);
  }, [location.search]);

  return (
    <>
      <h1>Users list</h1>
      <GridWrapper>
        {data.response?.data.data.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </GridWrapper>
      <StyledPagination
        count={10}
        variant="outlined"
        color="primary"
        onChange={() => history.push('/users?page=2')}
      />
    </>
  );
}
