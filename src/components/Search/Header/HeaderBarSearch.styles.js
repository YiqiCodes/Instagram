import styled from "styled-components";

export const HeaderBarContainer = styled.div`
  position: fixed;
  height: 5rem;
  width: 375px;
`;
export const HeaderBarTop = styled.div`
  position: fixed;
  height: 2.5rem;
  width: 375px;
  background: black;
  display: flex;
  flex-direction: row;
`;
export const HeaderBarSearchBar = styled.div`
  display: flex;
  width: 85%;
  height: 80%;
  margin: 4px;
  border-radius: 8px;
  background: #333333;
  color: lightgray;
  text-align: center;
  align-items: center;
  padding-left: 5px;
`;
export const ChannelDiv = styled.div`
  height: 75%;
  width: 25%;
  margin: 5px;
  border-radius: 5px;
  background: black;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: small;
  font-weight: 200;
  min-width: 6rem;
`;
export const HeaderBarIcon = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameTagImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
`;

export const HeaderBarBottom = styled.div`
  position: fixed;
  overflow: auto;
  display: flex;
  align-items: center;
  height: 2.5rem;
  width: 375px;
  top: 2.5rem;
  background: #161616;
`;
