import styled from "styled-components";

export const StoriesContainerDiv = styled.div`
  overflow: auto;
  white-space: nowrap;
  position: relative;
  display: flex;
  justify-content: normal;
  width: 375px;
  height: 5rem;
  border-bottom: 1px solid #cccccc;
  border-width: 0.01em;
  @media screen and (min-width: 376px) {
    width: 375px;
  }
`;

export const StoryContainerDiv = styled.div`
  width: 25%;
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
