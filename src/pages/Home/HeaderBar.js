import React from "react";

import {
  HeaderContainerDiv,
  HeaderIconDiv,
  HeaderIconImage,
} from "./Home.styles";

import CameraIcon from "../../assets/img/Camera.png";
import MessageIcon from "../../assets/img/Message.png";
import InstagramTitle from "../../assets/img/Instagram2.png";

const HeaderBar = () => {
  return (
    <HeaderContainerDiv>
      <HeaderIconDiv>
        <HeaderIconImage src={CameraIcon} alt="" />
        <HeaderIconImage
          style={{ maxWidth: "none" }}
          src={InstagramTitle}
          alt=""
        />
        <HeaderIconImage
          style={{ padding: "0.4em 0.3em 0 0" }}
          src={MessageIcon}
          alt=""
        />
      </HeaderIconDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBar;
