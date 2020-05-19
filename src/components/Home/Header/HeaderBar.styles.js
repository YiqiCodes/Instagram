import styled from "styled-components";

export const HeaderContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 375px;
  height: 3rem;
  background: #252525;
  color: white;
  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;

export const HeaderIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;

export const HeaderIconImage = styled.img`
  max-width: 3rem;
  height: 80%;
  padding: 0.4em 0 0 0.3em;
`;
