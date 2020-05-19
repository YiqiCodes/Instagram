import React from "react";

//Components
import HeaderBar from "../../components/Home/Header/HeaderBar";
import BottomBar from "../../components/Home/Bottom/BottomBar";
import Posts from "../../components/Home/Posts/Posts";
import Stories from "../../components/Home/Stories/Stories";

// Styles
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
