import React from "react";
import styled from "styled-components";
import { Home, Compass, User } from "react-feather";

import Search from "./Search";

const Container = styled.div`
  height: 3rem;
  display: flex;
  padding: 1rem 16rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.primary};
`;

const StyledHome = styled(Home)`
  stroke-width: 2px;
  :hover {
    cursor: pointer;
  }
`;

const StyledCompass = styled(Compass)`
  margin: 0 1rem;
  stroke-width: 2px;
  :hover {
    cursor: pointer;
  }
`;

const StyledUser = styled(User)`
  stroke-width: 2px;
  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div``;

function Header() {
  return (
    <Container>
      <h2>Insta</h2>
      <Search />
      <Wrapper>
        <StyledHome />
        <StyledCompass />
        <StyledUser />
      </Wrapper>
    </Container>
  );
}

export default Header;
