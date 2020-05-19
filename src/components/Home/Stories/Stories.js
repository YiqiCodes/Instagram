import React from "react";

// Helpers
import { StoryIcons } from "../../../Helpers/Icons";

// Styles
import {
  StoriesContainerDiv,
  StoryIconImage,
  StoryContainerDiv,
  StoryHandleDiv,
} from "./Stories.styles";

const Stories = () => {
  const storyDetails = {
    "Your Story": StoryIcons[0],
    chrisburkard: StoryIcons[1],
    instagram: StoryIcons[2],
    helloemilie: StoryIcons[3],
    banksy: StoryIcons[4],
    lightroom: StoryIcons[5],
  };
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
