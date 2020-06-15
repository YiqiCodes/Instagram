import React from "react";

// Assets
import PostImageOne from "../../assets/img/PostOne.JPG";
import PostImageTwo from "../../assets/img/PostTwo.JPG";
import PostImageThree from "../../assets/img/PostThree.JPG";

// Styles
import {
  FeedContainer,
  FeedIndividual,
  FeedPost,
} from "../Search/Posts/PostsSearch.styles.js";

import { ProfileFeedContainer } from "../Profile/Profile.styles";

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
    <ProfileFeedContainer>
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGenerator()}
    </ProfileFeedContainer>
  );
};

export default ProfileFeed;
