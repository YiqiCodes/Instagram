import React from "react";

import PostImageOne from "../../../assets/img/PostOne.JPG";
import PostImageTwo from "../../../assets/img/PostTwo.JPG";
import PostImageThree from "../../../assets/img/PostThree.JPG";

import {
  FeedContainer,
  FeedIndividualLarge,
  FeedIndividual,
  FeedPost,
} from "../Posts/PostsSearch.styles";
const PostsSearch = () => {
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

  const feedGeneratorRight = () => {
    return (
      <FeedContainer style={{ height: "246px" }}>
        <FeedIndividualLarge>
          <FeedIndividual style={{ width: "100%", height: "123px" }}>
            <FeedPost src={randomPictureGenerator()} alt="" />
          </FeedIndividual>
          <FeedIndividual style={{ width: "100%", height: "123px" }}>
            <FeedPost src={randomPictureGenerator()} alt="" />
          </FeedIndividual>
        </FeedIndividualLarge>
        <FeedIndividual style={{ width: "66.67%" }}>
          <FeedPost src={randomPictureGenerator()} alt="" />
        </FeedIndividual>
      </FeedContainer>
    );
  };

  const feedGeneratorLeft = () => {
    return (
      <FeedContainer style={{ height: "246px" }}>
        <FeedIndividual style={{ width: "66.67%" }}>
          <FeedPost src={randomPictureGenerator()} alt="" />
        </FeedIndividual>
        <FeedIndividualLarge>
          <FeedIndividual style={{ width: "100%", height: "123px" }}>
            <FeedPost src={randomPictureGenerator()} alt="" />
          </FeedIndividual>
          <FeedIndividual style={{ width: "100%", height: "123px" }}>
            <FeedPost src={randomPictureGenerator()} alt="" />
          </FeedIndividual>
        </FeedIndividualLarge>
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
      {feedGeneratorRight()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGeneratorLeft()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGeneratorRight()}
      {feedGenerator()}
      {feedGenerator()}
      {feedGeneratorLeft()}
      {feedGenerator()}
      {feedGenerator()}
    </div>
  );
};

export default PostsSearch;
