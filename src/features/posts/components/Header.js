import React from "react";
import styled from "styled-components";
import { Home, Compass, User } from "react-feather";
import { NavLink } from "react-router-dom";

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

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.onPrimary};
  &.active {
    color: ${(props) => props.theme.secondary};
  }
`;

function Header() {
  return (
    <Container>
      <h2>Insta</h2>
      <Search />
      <Wrapper>
        <StyledLink to="/">
          <StyledHome />
        </StyledLink>
        <StyledLink to="/explore">
          <StyledCompass />
        </StyledLink>
        <StyledLink to="/userId">
          <StyledUser />
        </StyledLink>
      </Wrapper>
    </Container>
  );
}

export default Header;
