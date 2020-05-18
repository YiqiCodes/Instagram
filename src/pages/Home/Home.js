import React from "react";

import HeaderBar from "./HeaderBar";
import BottomBar from "./BottomBar";
import Posts from "./Posts";
import Stories from "./Stories";
import { OutterContainerDiv, ScrollableContainerDiv } from "./Home.styles";

const Home = () => {
  return (
    <>
      <OutterContainerDiv>
        <HeaderBar />
        <ScrollableContainerDiv>
          <Stories />
          <Posts />
        </ScrollableContainerDiv>
        <BottomBar />
      </OutterContainerDiv>
    </>
  );
};

export default Home;
