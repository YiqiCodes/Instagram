import styled from "styled-components";

export const OutterContainerDiv = styled.div`
  height: 100vh;
  background: #000000;
  color: white;
`;

export const ScrollableContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 3rem;
  min-height: 88.3vh;
  width: 100vw;
  overflow-y: scroll;
  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;
