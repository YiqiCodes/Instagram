import React from "react";

import HomeIcon from "../../assets/img/Home.png";
import SearchIcon from "../../assets/img/Search.png";
import LikeIcon from "../../assets/img/Heart.png";
import AddIcon from "../../assets/img/Add.png";
import YiqiIcon from "../../assets/img/Yiqi.jpg";

import {
  BottomContainerDiv,
  BottomIconDiv,
  BottomIconImage,
  IconContainerDiv,
} from "./Home.styles";

const BottomBar = () => {
  return (
    <BottomContainerDiv>
      <BottomIconDiv>
        <IconContainerDiv>
          <BottomIconImage src={HomeIcon} alt="" />
        </IconContainerDiv>
        <IconContainerDiv>
          <BottomIconImage src={SearchIcon} alt="" />
        </IconContainerDiv>
        <IconContainerDiv>
          <BottomIconImage src={AddIcon} alt="" />
        </IconContainerDiv>
        <IconContainerDiv>
          <BottomIconImage src={LikeIcon} alt="" />
        </IconContainerDiv>
        <IconContainerDiv>
          <BottomIconImage
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            src={YiqiIcon}
            alt=""
          />
        </IconContainerDiv>
      </BottomIconDiv>
    </BottomContainerDiv>
  );
};

export default BottomBar;
