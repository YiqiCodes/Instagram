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
  overflow-y: scroll;
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
  max-width: 3rem;
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

// Posts Styles

export const PostContainerDiv = styled.div`
  height: 80vh;
  width: 100%;
  background: gray;
`;

export const PostTitleDiv = styled.div`
  height: 6%;
  background: orange;
`;

export const PostImageDiv = styled.div`
  height: 69%;
  background: aqua;
`;

export const PostFooterDiv = styled.div`
  height: 25%;
  background: green;
`;

export const PostFooterIconDiv = styled.div`
  height: 25%;
  background: brown;
`;

export const PostFooterTextDiv = styled.div`
  height: 100%;
  background: black;
`;

export const PostFooterLikedByDiv = styled.div`
  height: 15%;
  background: gray;
`;

export const PostFooterCaptionDiv = styled.div`
  height: 30%;
  background: brown;
`;
export const PostFooterViewAllCommentsDiv = styled.div`
  height: 15%;
  background: gray;
`;
export const PostFooterAddCommentDiv = styled.div`
  height: 20%;
  background: red;
`;

export const PostFooterTimeDiv = styled.div`
  height: 10%;
  background: green;
`;
