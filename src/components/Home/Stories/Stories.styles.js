import styled from "styled-components";

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
