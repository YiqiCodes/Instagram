import React from "react";

//Helpers
import { BottomIcons } from "../../../Helpers/Icons";

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
        {BottomIcons.map((icon) => (
          <IconContainerDiv>
            <BottomIconImage src={icon} alt="" />
          </IconContainerDiv>
        ))}
      </BottomIconDiv>
    </BottomContainerDiv>
  );
};

export default BottomBar;
