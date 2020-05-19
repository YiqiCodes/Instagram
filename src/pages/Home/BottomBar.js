import React from "react";

import HomeIcon from "../../assets/img/Home.png";
import SearchIcon from "../../assets/img/Search.png";
import LikeIcon from "../../assets/img/Heart.png";
import AddIcon from "../../assets/img/Add.png";
import ProfileIcon from "../../assets/img/StoryYiqi.png";

import {
  BottomContainerDiv,
  BottomIconDiv,
  BottomIconImage,
  IconContainerDiv,
} from "./Home.styles";

const BottomBar = () => {
  const BottomIcons = [HomeIcon, SearchIcon, AddIcon, LikeIcon, ProfileIcon];
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
