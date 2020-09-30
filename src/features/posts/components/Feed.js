import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Header from "./Header";
import PostForm from "./PostForm";

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
  return (
    <MainContainer>
      <Header />
      <Container>
        <PostForm />
      </Container>
    </MainContainer>
  );
}

export default Feed;
