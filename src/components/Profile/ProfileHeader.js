import React from "react";

import Hamburger from "../../assets/img/Hamburger.png";

import { HeaderDiv, IconImage } from "../Profile/Profile.styles";
const ProfileHeader = () => {
  return (
    <HeaderDiv>
      zhangyiqi <IconImage src={Hamburger} alt=""></IconImage>
    </HeaderDiv>
  );
};

export default ProfileHeader;
