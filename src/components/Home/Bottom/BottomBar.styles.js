import styled from "styled-components";

export const BottomContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 3rem;
  background: #252525;
  color: white;
  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;

export const BottomIconDiv = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100vw;
  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;

export const BottomIconImage = styled.img`
  max-width: 3rem;
  height: 60%;
  padding: 0.3em;
`;

export const IconContainerDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
