import React from "react";

import HeaderBar from "./HeaderBar";
import BottomBar from "./BottomBar";

import {
  OutterContainerDiv,
  StoriesContainerDiv,
  ScrollableContainerDiv,
  PostsContainerDiv,
} from "./Home.styles";

const Home = () => {
  return (
    <>
      <OutterContainerDiv>
        <HeaderBar />
        <ScrollableContainerDiv>
          <StoriesContainerDiv>Stories</StoriesContainerDiv>
          <PostsContainerDiv>Posts</PostsContainerDiv>
        </ScrollableContainerDiv>
        <BottomBar />
      </OutterContainerDiv>
    </>
  );
};

export default Home;
