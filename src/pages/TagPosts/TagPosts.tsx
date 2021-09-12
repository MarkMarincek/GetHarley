import React, { useEffect } from 'react';
import GridWrapper from 'components/GridWrapper';
import PostCard from 'components/PostCard';
import StyledPagination from 'components/StyledPagination';
import Tag from 'components/Tag';
import useApiHook from 'hooks/useApi.hook';
import usePagination from 'hooks/usePagination.hook';
import { useParams } from 'react-router';
import { getTagPosts } from 'utils/api';
import LoadingIndicator from 'components/LoadingIndicator';
import { TagPostsContainer } from './TagPosts.style';

export default function TagPosts() {
  const { tag } = useParams<{ tag: string }>();
  const [tagPostsState, requestTagPosts] = useApiHook(getTagPosts);
  const [page, pageCount, setPage] = usePagination(tagPostsState.response?.data);

  useEffect(() => {
    requestTagPosts(tag, { page: page - 1 });
  }, [tag, page, requestTagPosts]);

  function renderPosts() {
    if (tagPostsState.loading) return <LoadingIndicator />;
    if (tagPostsState.error) return <p className="warning__text">Something went wrong</p>;
    if (!tagPostsState.response?.data.data.length)
      return <p className="warning__text">No posts for this tag</p>;

    return (
      <GridWrapper>
        {tagPostsState.response.data.data.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </GridWrapper>
    );
  }

  return (
    <>
      <TagPostsContainer>
        <h1>Posts for: </h1>
        <Tag tag={tag} large />
      </TagPostsContainer>
      {renderPosts()}
      {pageCount > 1 && (
        <StyledPagination
          count={pageCount}
          page={page}
          variant="outlined"
          color="primary"
          onChange={(_, value) => setPage(value)}
        />
      )}
    </>
  );
}
