import React from "react";

import NameTagIcon from "../../../assets/img/Nametag.png";
import SearchIcon from "../../../assets/img/Search.png";
import { channels } from "../../../Helpers/Details";
// Styles
import {
  HeaderBarContainer,
  HeaderBarTop,
  HeaderBarBottom,
  HeaderBarSearchBar,
  HeaderBarIcon,
  NameTagImg,
  ChannelDiv,
} from "./HeaderBarSearch.styles";

const HeaderBarSearch = () => {
  return (
    <HeaderBarContainer>
      <HeaderBarTop>
        <HeaderBarSearchBar>
          <img
            src={SearchIcon}
            alt=""
            style={{ padding: "5px", height: "15px", width: "15px" }}
          />
          Search
        </HeaderBarSearchBar>
        <HeaderBarIcon>
          <NameTagImg src={NameTagIcon} alt="" />
        </HeaderBarIcon>
      </HeaderBarTop>
      <HeaderBarBottom>
        {channels.map((channel) => {
          return <ChannelDiv>{channel}</ChannelDiv>;
        })}
      </HeaderBarBottom>
    </HeaderBarContainer>
  );
};

export default HeaderBarSearch;
