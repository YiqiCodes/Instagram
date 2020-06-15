import React from "react";

//Components
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import ProfileFeed from "../../components/Profile/ProfileFeed";
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
        <ScrollableContainerDiv style={{ minHeight: "87vh", top: "2.5rem" }}>
          <ProfileDetails />
          <ProfileFeed />
        </ScrollableContainerDiv>
        <BottomBar />
      </OutterContainerDiv>
    </>
  );
};

export default Profile;
