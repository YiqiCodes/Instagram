import React from "react";

// Styles
import {
  LikeContentContainer,
  LikeContentDiv,
  LikerIcon,
  LikerDetails,
  UserContent,
} from "../Likes/Likes.styles";

const Likes = () => {
  return (
    <LikeContentContainer>
      <LikeContentDiv>
        <LikerIcon />
        <LikerDetails> banksy liked your photo. 3m </LikerDetails>
        <UserContent />
      </LikeContentDiv>
      <LikeContentDiv>
        <LikerIcon />
        <LikerDetails> banksy liked your photo. 3m </LikerDetails>
        <UserContent />
      </LikeContentDiv>
    </LikeContentContainer>
  );
};

export default Likes;
