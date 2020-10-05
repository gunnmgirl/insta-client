import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import PostForm from "./PostForm";
import Post from "./Post";
import { getFeedPosts, clearPageCounter } from "../actions/postsActions";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.surface};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 16rem;
`;

function Feed() {
  const posts = useSelector((state) => state.posts.posts);
  const page = useSelector((state) => state.posts.page);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(clearPageCounter());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getFeedPosts({ page }));
  }, [dispatch, page]);

  return (
    <MainContainer>
      <Header />
      <Container>
        <PostForm />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    </MainContainer>
  );
}

export default Feed;
