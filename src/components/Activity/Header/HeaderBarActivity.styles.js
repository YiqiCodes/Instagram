import styled from "styled-components";

export const HeaderContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 375px;
  height: 3rem;
  background: #252525;
  color: white;
  font-size: larger;
  font-weight: 500;
  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;
