import React from "react";

import { BottomContainerDiv, BottomIconDiv } from "./Home.styles";

const BottomBar = () => {
  return (
    <BottomContainerDiv>
      <BottomIconDiv>
        <p>Home</p>
        <p>Search</p>
        <p>Post</p>
        <p>Like</p>
        <p>Prof</p>
      </BottomIconDiv>
    </BottomContainerDiv>
  );
};

export default BottomBar;
