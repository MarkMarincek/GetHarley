import React, { useEffect } from 'react';
import GridWrapper from 'components/GridWrapper';
import LoadingIndicator from 'components/LoadingIndicator';
import PostCard from 'components/PostCard';
import useApiHook from 'hooks/useApi.hook';
import usePagination from 'hooks/usePagination.hook';
import { useParams } from 'react-router';
import { getUser, getUserPosts } from 'utils/api';
import { getFullName } from 'utils/helpers';
import { UserPostsTitleContainer } from './UserPosts.style';

export default function UserPosts() {
  const { userId } = useParams<{ userId: string }>();
  const [userPostsState, requestUserPosts] = useApiHook(getUserPosts);
  const [userState, requestUser] = useApiHook(getUser);
  const [page] = usePagination(userPostsState.response?.data);

  useEffect(() => {
    requestUser(userId);
    requestUserPosts(userId, { page: page - 1 });
  }, [userId, page, requestUser, requestUserPosts]);

  const isLoading = userState.loading || userPostsState.loading;
  const user = userState.response?.data;

  if (isLoading || !user) return <LoadingIndicator />;

  const useFullName = getFullName(user);

  return (
    <>
      <UserPostsTitleContainer>
        <h1>Posts for: </h1>
        <h2>{useFullName}</h2>
      </UserPostsTitleContainer>
      <GridWrapper>
        {userPostsState.response?.data.data.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </GridWrapper>
    </>
  );
}
