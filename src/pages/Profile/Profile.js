import React from "react";

//Components
import ProfileHeader from "../../components/Profile/ProfileHeader";
import BottomBar from "../../components/Home/Bottom/BottomBar";

// Styles
import {
  OutterContainerDiv,
  ScrollableContainerDiv,
} from "../Home/Home.styles";

const Profile = () => {
  return (
    <>
      <OutterContainerDiv>
        <ProfileHeader />
        <ScrollableContainerDiv></ScrollableContainerDiv>
        <BottomBar />
      </OutterContainerDiv>
    </>
  );
};

export default Profile;
