import React from "react";

import HeaderBar from "./HeaderBar";
import BottomBar from "./BottomBar";
import Posts from "./Posts";
import {
  OutterContainerDiv,
  StoriesContainerDiv,
  ScrollableContainerDiv,
} from "./Home.styles";

const Home = () => {
  return (
    <>
      <OutterContainerDiv>
        <HeaderBar />
        <ScrollableContainerDiv>
          <StoriesContainerDiv>Story Story Story Story</StoriesContainerDiv>
          <Posts></Posts>
        </ScrollableContainerDiv>
        <BottomBar />
      </OutterContainerDiv>
    </>
  );
};

export default Home;
