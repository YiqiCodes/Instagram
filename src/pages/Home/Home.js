import React from "react";

import {
  OutterContainerDiv,
  HeaderContainerDiv,
  StoriesContainerDiv,
  ScrollableContainerDiv,
  PostsContainerDiv,
  BottomContainerDiv,
} from "./Home.styles";

const Home = () => {
  return (
    <>
      <OutterContainerDiv>
        <HeaderContainerDiv>Instagram</HeaderContainerDiv>
        <ScrollableContainerDiv>
          <StoriesContainerDiv>Stories</StoriesContainerDiv>
          <PostsContainerDiv>Posts</PostsContainerDiv>
        </ScrollableContainerDiv>
        <BottomContainerDiv>Bottom</BottomContainerDiv>
      </OutterContainerDiv>
    </>
  );
};

export default Home;
