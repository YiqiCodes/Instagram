import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 375px;
  border-bottom: 1px solid gray;
  background: #161616;
`;

export const IconImage = styled.img`
  width: 25px;
  height: 25px;
  position: fixed;
  right: 0;
  padding-right: 10px;
`;

export const ProfileDetailsContainer = styled.div`
  background: #161616;
  height: 60vh;
  width: 375px;
  border-top: 1px solid gray;
`;
export const ProfileDetailsTop = styled.div`
  background: #161616;
  height: 15vh;
  width: 375px;
`;

export const ProfileDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15vh;
  width: 375px;
  background: #161616;
  padding-left: 10px;
`;

export const ProfileDetailsButtons = styled.div`
  height: 10vh;
  width: 375px;
  background: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfileButton = styled.div`
  background: black;
  border-radius: 2px;
  width: 33%;
  margin: 4px;
  color: white;
  align-items: center;
  text-align: center;
  border: 1px solid gray;
  padding: 2px 0px;
  font-size: small;
`;
export const ProfileButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const ProfileDetailsHighlights = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  overflow: auto;
  height: 15vh;
  width: 375px;
  background: #161616;
`;

export const ProfileHighlightImage = styled.img`
  width: 50px;
  height: 50px;
  padding: 0 1rem;
`;

export const ProfileHighlightIndividualContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 15vh;
  align-items: center;
  justify-content: center;
  font-weight: 200;
`;

export const ProfileDetailsIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid gray;
  height: 7.5vh;
  width: 375px;
  background: #161616;
`;

export const ProfileIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const DetailsStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
  height: 15vh;
`;

export const DetailsPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;
