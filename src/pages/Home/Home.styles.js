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
  background: black;
  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;

export const ContentNotAvailable = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 375px;
  text-align: center;
  flex-direction: column;
  padding: 2px;
`;
