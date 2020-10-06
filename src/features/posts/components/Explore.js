import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getAllPosts, clearPageCounter } from "../actions/postsActions";
import Header from "./Header";

const Wrapper = styled.div`
  min-height: 20rem;
  max-height: 40rem;
  min-width: 20rem;
  max-width: 30rem;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.surface};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  padding: 2rem 16rem;
`;

function Explore() {
  const posts = useSelector((state) => state.posts.posts);
  const page = useSelector((state) => state.posts.page);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(clearPageCounter());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getAllPosts({ page }));
  }, [dispatch, page]);

  return (
    <MainContainer>
      <Header />
      <Container>
        {posts.map((post) => (
          <Wrapper>
            <StyledImage src={post.imageUrl} alt={post.caption} />
          </Wrapper>
        ))}
      </Container>
    </MainContainer>
  );
}

export default Explore;
