import styled from "styled-components";

export const LikeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
`;
export const LikeContentDiv = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  background: black;
  padding: 4px 0px;
  margin: 2px 0px;
`;

export const LikerImg = styled.img`
  height: 100%;
  width: 100%;
`;
export const LikerIcon = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  width: 10%;
  border-radius: 50%;
  background: yellow;
  margin-left: 1rem;
  align-self: center;
`;
export const LikerDetails = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
  align-items: center;
  padding-left: 1rem;
  font-size: smaller;
`;
export const UserContent = styled.div`
  display: flex;
  height: 100%;
  width: 12.5%;
  background: green;
  margin-right: 1rem;
`;
