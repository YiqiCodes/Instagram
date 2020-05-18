import styled from "styled-components";

export const OutterContainerDiv = styled.div`
  height: 100vh;
  background: #000000;
  color: white;
`;

export const StoriesContainerDiv = styled.div`
  overflow: auto;
  white-space: nowrap;
  position: relative;
  display: flex;
  justify-content: normal;
  width: 100vw;
  height: 5rem;
  border-bottom: 1px solid #cccccc;
  border-width: 0.01em;
`;

export const ScrollableContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 3rem;
  min-height: 88.3vh;
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

//Stories Styles

export const StoryContainerDiv = styled.div`
  width: 25%;
  min-width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
`;

export const StoryHandleDiv = styled.div`
  padding-bottom: 5px;
  padding-top: 2px;
  font-size: small;
`;

export const StoryIconImage = styled.img`
  max-width: 3rem;
  height: 65%;
  padding: 0.3em;
  padding: 0;
`;

// Posts Styles

export const PostsContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  min-height: 78.3vh;
  width: 100%;
  justify-content: center;
`;

export const PostContainerDiv = styled.div`
  min-height: 80vh;
  width: 100%;
  background: gray;
`;

export const ProfilePictureDiv = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const ProfileNameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 100%;
  width: 80%;
  font-weight: 600;
  padding-left: 8px;
`;

export const ProfileSettings = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  font-size: xx-large;
  height: 50%;
`;

export const PostTitleLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  height: 100%;
  width: 40%;
`;

export const PostTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5vh;
  background: black;
`;

export const PostImageDiv = styled.img`
  width: 100vw;
  height: 60vh;
  background: aqua;
`;

export const PostFooterDiv = styled.div`
  height: 25%;
  background: green;
`;

export const PostFooterIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5vh;
  background: black;
  padding-left: 6px;
`;

export const PostFooterTextDiv = styled.div`
  height: 100%;
  background: black;
`;

export const PostFooterLikedByDiv = styled.div`
  height: 2.5vh;
  background: black;
  padding: 2px 2px 5px 10px;
`;

export const PostFooterCaptionDiv = styled.div`
  height: 2.5vh;
  background: black;
  padding: 2px 2px 5px 10px;
`;
export const PostFooterViewAllCommentsDiv = styled.div`
  height: 3vh;
  background: black;
  color: gray;
  padding: 2px 2px 5px 10px;
`;
export const PostFooterAddCommentDiv = styled.div`
  height: 5vh;
  background: red;
`;

export const PostFooterTimeDiv = styled.div`
  height: 2.5vh;
  background: black;
  color: gray;
  padding: 2px 2px 5px 10px;
  font-size: small;
`;
