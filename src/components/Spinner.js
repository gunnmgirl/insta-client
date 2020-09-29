import React from "react";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid ${(props) => props.theme.surface};
  border-right: 2px solid ${(props) => props.theme.surface};
  border-bottom: 2px solid ${(props) => props.theme.surface};
  border-left: 4px solid ${(props) => props.theme.warning};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme.onPrimary};
  justify-content: center;
  margin: 4rem 0;
`;

function Spinner() {
  return (
    <Container>
      <StyledSpinner />
    </Container>
  );
}

export default Spinner;
