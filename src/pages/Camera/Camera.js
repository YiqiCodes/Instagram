import React from "react";

//Components
import HeaderBar from "../../components/Home/Header/HeaderBar";
import BottomBar from "../../components/Home/Bottom/BottomBar";

// Styles
import { OutterContainerDiv, ContentNotAvailable } from "../Home/Home.styles";

const Camera = () => {
  return (
    <>
      <OutterContainerDiv>
        <HeaderBar />
        <ContentNotAvailable>
          Camera feature not yet available! <br></br>
          Follow me on Instagram:{" "}
          <a
            href="https://www.instagram.com/zhangyiqi"
            target="_blank"
            style={{ color: "blue" }}
          >
            @zhangyiqi
          </a>
        </ContentNotAvailable>
        <BottomBar />
      </OutterContainerDiv>
    </>
  );
};

export default Camera;
