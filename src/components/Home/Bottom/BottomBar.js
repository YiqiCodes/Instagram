import React from "react";

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
  return (
    <BottomContainerDiv>
      <BottomIconDiv>
        {bottomIcons.map((icon) => (
          <IconContainerDiv>
            <BottomIconImage src={icon} alt="" />
          </IconContainerDiv>
        ))}
      </BottomIconDiv>
    </BottomContainerDiv>
  );
};

export default BottomBar;
