import React from "react";

// Icons
import StoryInstagram from "../../../assets/img/StoryInsta.png";
import StoryCB from "../../../assets/img/StoryCB.png";
import StoryBanksy from "../../../assets/img/StoryBanksy.png";
import StoryLR from "../../../assets/img/StoryLR.png";
import StoryEmilie from "../../../assets/img/StoryEmilie.png";
import PostImageOne from "../../../assets/img/PostOne.JPG";
import PostImageTwo from "../../../assets/img/PostTwo.JPG";
import PostImageThree from "../../../assets/img/PostThree.JPG";

// Styles
import {
  LikeContentContainer,
  LikeContentDiv,
  LikerIcon,
  LikerDetails,
  LikerImg,
  UserContent,
} from "../Likes/Likes.styles";

const Likes = () => {
  const likeGenerator = () => {
    const nameGenerator = () => {
      const nameArray = [
        ["banksy", StoryBanksy],
        ["instagram", StoryInstagram],
        ["chrisburkard", StoryCB],
        ["helloemilie", StoryEmilie],
        ["lightroom", StoryLR],
      ];
      return nameArray[Math.floor(Math.random() * Math.floor(5))];
    };
    const pictureGenerator = () => {
      const pictureArray = [PostImageOne, PostImageTwo, PostImageThree];
      return pictureArray[Math.floor(Math.random() * Math.floor(3))];
    };
    return (
      <LikeContentDiv>
        <LikerIcon>
          <LikerImg src={nameGenerator()[1]} alt=""></LikerImg>
        </LikerIcon>
        <LikerDetails> {nameGenerator()[0]} liked your photo. 3m </LikerDetails>
        <UserContent>
          <LikerImg src={pictureGenerator()} alt=""></LikerImg>
        </UserContent>
      </LikeContentDiv>
    );
  };

  return (
    <LikeContentContainer>
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
      {likeGenerator()}
    </LikeContentContainer>
  );
};

export default Likes;
