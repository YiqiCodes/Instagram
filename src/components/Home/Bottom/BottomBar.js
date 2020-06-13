import React from "react";

import { Link } from "react-router-dom";

//Helpers
import { bottomIcons } from "../../../Helpers/Icons";

//Styles
import {
  BottomContainerDiv,
  BottomIconDiv,
  BottomIconImage,
  IconContainerDiv,
} from "./BottomBar.styles.js";

const BottomBar = () => {
  const linkStyles = { display: "flex", height: "3rem", alignItems: "center" };
  return (
    <BottomContainerDiv>
      <BottomIconDiv>
        <IconContainerDiv>
          <Link to="/" style={linkStyles}>
            <BottomIconImage src={bottomIcons[0]} alt="" />
          </Link>
        </IconContainerDiv>
        <IconContainerDiv>
          <BottomIconImage src={bottomIcons[1]} alt="" />
        </IconContainerDiv>
        <IconContainerDiv>
          <BottomIconImage src={bottomIcons[2]} alt="" />
        </IconContainerDiv>
        <IconContainerDiv>
          <Link to="/activity" style={linkStyles}>
            <BottomIconImage src={bottomIcons[3]} alt="" />
          </Link>
        </IconContainerDiv>
        <IconContainerDiv>
          <BottomIconImage src={bottomIcons[4]} alt="" />
        </IconContainerDiv>
      </BottomIconDiv>
    </BottomContainerDiv>
  );
};

export default BottomBar;
