import React from "react";

import HeaderBarSearch from "../../components/Search/Header/HeaderBarSearch";
import PostsSearch from "../../components/Search/Posts/PostsSearch";
import BottomBar from "../../components/Home/Bottom/BottomBar";

// Styles
import {
  OutterContainerDiv,
  ScrollableContainerDiv,
} from "../Home/Home.styles";

function Search() {
  return (
    <OutterContainerDiv>
      <HeaderBarSearch />
      <ScrollableContainerDiv style={{ top: "5rem" }}>
        <PostsSearch />
      </ScrollableContainerDiv>
      <BottomBar />
    </OutterContainerDiv>
  );
}

export default Search;
