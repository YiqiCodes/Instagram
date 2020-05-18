import React from "react";

import YiqiIcon from "../../assets/img/Yiqi.jpg";
import NatGeoIcon from "../../assets/img/NatGeo.jpg";

import {
  StoriesContainerDiv,
  StoryIconImage,
  StoryContainerDiv,
  StoryHandleDiv,
} from "./Home.styles";

const Stories = () => {
  return (
    <StoriesContainerDiv>
      <StoryContainerDiv style={{ paddingLeft: "5px" }}>
        <StoryIconImage src={YiqiIcon} alt="" />
        <StoryHandleDiv>Your Story</StoryHandleDiv>
      </StoryContainerDiv>
      <StoryContainerDiv>
        <StoryIconImage src={NatGeoIcon} alt="" />
        <StoryHandleDiv>natgeo</StoryHandleDiv>
      </StoryContainerDiv>
      <StoryContainerDiv>
        <StoryIconImage src={NatGeoIcon} alt="" />
        <StoryHandleDiv>natgeo</StoryHandleDiv>
      </StoryContainerDiv>
      <StoryContainerDiv>
        <StoryIconImage src={NatGeoIcon} alt="" />
        <StoryHandleDiv>natgeo</StoryHandleDiv>
      </StoryContainerDiv>
      <StoryContainerDiv>
        <StoryIconImage src={NatGeoIcon} alt="" />
        <StoryHandleDiv>natgeo</StoryHandleDiv>
      </StoryContainerDiv>
      <StoryContainerDiv>
        <StoryIconImage src={NatGeoIcon} alt="" />
        <StoryHandleDiv>natgeo</StoryHandleDiv>
      </StoryContainerDiv>
      <StoryContainerDiv>
        <StoryIconImage src={NatGeoIcon} alt="" />
        <StoryHandleDiv>natgeo</StoryHandleDiv>
      </StoryContainerDiv>
      <StoryContainerDiv>
        <StoryIconImage src={NatGeoIcon} alt="" />
        <StoryHandleDiv>natgeo</StoryHandleDiv>
      </StoryContainerDiv>
    </StoriesContainerDiv>
  );
};

export default Stories;
