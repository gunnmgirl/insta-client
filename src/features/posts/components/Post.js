import React from "react";
import styled from "styled-components";
import { Heart, MessageCircle, Bookmark } from "react-feather";

const MainContainer = styled.div`
  width: 38rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 3px;
  background-color: ${(props) => props.theme.primary};
  margin: 1.5rem 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
`;

const ProfileImage = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.6rem;
`;

const PostImage = styled.div`
  height: 41rem;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const StyledMessageCircle = styled(MessageCircle)`
  stroke-width: 2px;
  margin: 0 1rem;
  :hover {
    cursor: pointer;
  }
`;

const StyledHeart = styled(Heart)`
  stroke-width: 2px;
  :hover {
    cursor: pointer;
  }
`;

const StyledBookmark = styled(Bookmark)`
  stroke-width: 2px;
  :hover {
    cursor: pointer;
  }
`;

const Options = styled.div`
  padding: 1rem 1rem;
`;

function Post({ post }) {
  return (
    <MainContainer>
      <Header>
        <ProfileImage />
        <Wrapper>
          <span>Dua Lipa</span>
          <span>London</span>
        </Wrapper>
      </Header>
      <PostImage imageUrl={post.imageUrl} />
      <Options>
        <StyledHeart />
        <StyledMessageCircle />
        <StyledBookmark />
      </Options>
    </MainContainer>
  );
}

export default Post;