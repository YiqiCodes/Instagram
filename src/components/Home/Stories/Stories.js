import React from "react";

// Helpers
import { storyDetails } from "../../../Helpers/Details";

// Styles
import {
  StoriesContainerDiv,
  StoryIconImage,
  StoryContainerDiv,
  StoryHandleDiv,
} from "./Stories.styles";

const Stories = () => {
  return (
    <StoriesContainerDiv>
      {Object.entries(storyDetails).map((key) => {
        return (
          <StoryContainerDiv>
            <StoryIconImage src={key[1]} alt="" />
            <StoryHandleDiv>{key[0]}</StoryHandleDiv>
          </StoryContainerDiv>
        );
      })}
    </StoriesContainerDiv>
  );
};

export default Stories;
