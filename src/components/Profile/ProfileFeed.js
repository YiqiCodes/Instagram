import React from "react";

import PostImageOne from "../../assets/img/PostOne.JPG";
import PostImageTwo from "../../assets/img/PostTwo.JPG";
import PostImageThree from "../../assets/img/PostThree.JPG";

import {
  FeedContainer,
  FeedIndividual,
  FeedPost,
} from "../Search/Posts/PostsSearch.styles.js";

const ProfileFeed = () => {
  const feedGenerator = () => {
    return (
      <FeedContainer>
        <FeedIndividual>
          <FeedPost src={randomPictureGenerator()} alt="" />
        </FeedIndividual>
        <FeedIndividual>
          <FeedPost src={randomPictureGenerator()} alt="" />
        </FeedIndividual>
        <FeedIndividual>
          <FeedPost src={randomPictureGenerator()} alt="" />
        </FeedIndividual>
      </FeedContainer>
    );
  };

  const randomPictureGenerator = () => {
    const pictures = [PostImageOne, PostImageTwo, PostImageThree];

    const randomlyGeneratedPicture =
      pictures[Math.floor(Math.random() * Math.floor(3))];

    return randomlyGeneratedPicture;
  };
  return (
    <div style={{ position: "absolute", marginBottom: "3rem" }}>
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
    </div>
  );
};

export default ProfileFeed;
