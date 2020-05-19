import React from "react";

// Helpers
import { headerIcons } from "../../../Helpers/Icons";

// Styles
import {
  HeaderContainerDiv,
  HeaderIconDiv,
  HeaderIconImage,
} from "./HeaderBar.styles.js";

const HeaderBar = () => {
  return (
    <HeaderContainerDiv>
      <HeaderIconDiv>
        <HeaderIconImage src={headerIcons[0]} alt="" />
        <HeaderIconImage
          style={{ maxWidth: "none" }}
          src={headerIcons[1]}
          alt=""
        />
        <HeaderIconImage
          style={{ padding: "0.4em 0.3em 0 0" }}
          src={headerIcons[2]}
          alt=""
        />
      </HeaderIconDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBar;
