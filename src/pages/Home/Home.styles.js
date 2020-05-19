import styled from "styled-components";

export const OutterContainerDiv = styled.div`
  height: 100vh;
  background: #000000;
  color: white;

  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;

export const ScrollableContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 3rem;
  min-height: 88.3vh;
  width: 375px;
  overflow-y: scroll;
`;
