import styled from "styled-components";

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

export const PostImageDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 60vh;
  @media screen and (min-width: 376px) {
    background: black;
    justify-content: center;
  }
`;
export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;

export const PostFooterDiv = styled.div`
  height: 25%;
`;

export const BottomIconImage = styled.img`
  max-width: 3rem;
  height: 60%;
  padding: 0.3em;
`;

export const PostFooterIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5vh;
  background: black;
  padding-left: 6px;
`;

export const PostFooterLeftDiv = styled.div`
  display: flex;
  height: 100%;
`;

export const PostFooterRightDiv = styled.div`
  height: 100%;
  padding-right: 5px;
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
`;

export const PostFooterTimeDiv = styled.div`
  height: 2.5vh;
  background: black;
  color: gray;
  padding: 2px 2px 5px 10px;
  font-size: small;
`;
