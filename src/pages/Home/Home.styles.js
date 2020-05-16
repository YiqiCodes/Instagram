import styled from "styled-components";

export const OutterContainerDiv = styled.div`
  height: 100vh;
  background: #000000;
  color: white;
`;

export const StoriesContainerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 5rem;
  border-bottom: 1px solid #cccccc;
  border-width: 0.01em;
`;

export const PostsContainerDiv = styled.div`
  display: flex;
  position: absolute;
  top: 5rem;
  height: 78.3vh;
  width: 100%;
  justify-content: center;
`;

export const ScrollableContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 3rem;
  height: 88.3vh;
  width: 100vw;
`;

// Top Bar

export const HeaderContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3rem;
  background: #252525;
  color: white;
`;

export const HeaderIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

export const HeaderIconImage = styled.img`
  max-width: 10%;
  height: 80%;
  padding: 0.4em 0 0 0.3em;
`;

// Bottom Bar

export const BottomContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 3rem;
  background: #252525;
  color: white;
`;

export const BottomIconDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;
