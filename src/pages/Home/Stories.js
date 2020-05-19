import React from "react";

import StoryYiqi from "../../assets/img/StoryYiqi.png";
import StoryInstagram from "../../assets/img/StoryInsta.png";
import StoryCB from "../../assets/img/StoryCB.png";
import StoryBanksy from "../../assets/img/StoryBanksy.png";
import StoryLR from "../../assets/img/StoryLR.png";
import StoryEmilie from "../../assets/img/StoryEmilie.png";

import {
  StoriesContainerDiv,
  StoryIconImage,
  StoryContainerDiv,
  StoryHandleDiv,
} from "./Home.styles";

const Stories = () => {
  const storyDetails = {
    "Your Story": StoryYiqi,
    chrisburkard: StoryCB,
    instagram: StoryInstagram,
    helloemilie: StoryEmilie,
    banksy: StoryBanksy,
    lightroom: StoryLR,
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
