import React from "react";

// Components
import BottomBar from "../../components/Home/Bottom/BottomBar";
import Likes from "../../components/Activity/Likes/Likes";

// Styles
import {
  OutterContainerDiv,
  ScrollableContainerDiv,
} from "../Home/Home.styles";
import HeaderBarActivity from "../../components/Activity/Header/HeaderBarActivity";

const Activity = () => {
  return (
    <>
      <OutterContainerDiv>
        <HeaderBarActivity />
        <ScrollableContainerDiv>
          <Likes />
        </ScrollableContainerDiv>
        <BottomBar />
      </OutterContainerDiv>
    </>
  );
};

export default Activity;
