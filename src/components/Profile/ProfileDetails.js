import React from "react";

import Icon from "../../assets/img/Heart.png";
import Yiqi from "../../assets/img/StoryYiqi.png";
import {
  ProfileDetailsContainer,
  ProfileDetailsTop,
  DetailsStats,
  DetailsPicture,
  ProfileHighlightImage,
  ProfileDetailsInfo,
  ProfileHighlightIndividualContainer,
  ProfileDetailsButtons,
  ProfileDetailsHighlights,
  ProfileDetailsIcons,
  ProfileButton,
  ProfileButtonRow,
  ProfileIcon,
} from "../Profile/Profile.styles";
const ProfileDetails = () => {
  return (
    <ProfileDetailsContainer>
      <ProfileDetailsTop>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <DetailsPicture>
            <img
              src={Yiqi}
              alt=""
              style={{ width: "80px", height: "80px" }}
            ></img>
          </DetailsPicture>
          <DetailsStats>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ textAlign: "center", fontWeight: "600" }}>537 </div>
              <div>Posts</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ textAlign: "center", fontWeight: "600" }}>
                5,541
              </div>
              <div>Followers</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ textAlign: "center", fontWeight: "600" }}>190</div>
              <div>Following</div>
            </div>
          </DetailsStats>
        </div>
      </ProfileDetailsTop>
      <ProfileDetailsInfo>
        <div style={{ fontWeight: "500" }}>zhangyiqi </div>
        <div style={{ fontWeight: "300", color: "gray" }}>Photographer </div>
        <div style={{ fontWeight: "300" }}>
          a picture is worth a thousand words{" "}
        </div>
        <a
          href="https://www.yiqizhangphotography.com"
          target="_blank"
          style={{ fontWeight: "300", color: "lightblue" }}
          rel="noopener noreferrer"
        >
          www.yiqizhangphotography.com
        </a>
        <div style={{ fontWeight: "300", color: "lightblue" }}>
          Toronto, Ontario{" "}
        </div>
      </ProfileDetailsInfo>
      <ProfileDetailsButtons>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ProfileButton style={{ width: "350px" }}>Edit Profile</ProfileButton>
          <ProfileButtonRow>
            <ProfileButton>Promotions</ProfileButton>
            <ProfileButton>Insights</ProfileButton>
            <ProfileButton>Email</ProfileButton>
          </ProfileButtonRow>
        </div>
      </ProfileDetailsButtons>
      <ProfileDetailsHighlights>
        <ProfileHighlightIndividualContainer>
          <ProfileHighlightImage src={Yiqi} alt="" />
          <div>canada</div>
        </ProfileHighlightIndividualContainer>
        <ProfileHighlightIndividualContainer>
          <ProfileHighlightImage src={Yiqi} alt="" />
          <div>'contrast'</div>
        </ProfileHighlightIndividualContainer>
        <ProfileHighlightIndividualContainer>
          <ProfileHighlightImage src={Yiqi} alt="" />
          <div>portaits 2</div>
        </ProfileHighlightIndividualContainer>
        <ProfileHighlightIndividualContainer>
          <ProfileHighlightImage src={Yiqi} alt="" />
          <div>portraits</div>
        </ProfileHighlightIndividualContainer>
        <ProfileHighlightIndividualContainer>
          <ProfileHighlightImage src={Yiqi} alt="" />
          <div>wallpapers</div>
        </ProfileHighlightIndividualContainer>
        <ProfileHighlightIndividualContainer>
          <ProfileHighlightImage src={Yiqi} alt="" />
          <div>iceland</div>
        </ProfileHighlightIndividualContainer>
      </ProfileDetailsHighlights>
      <ProfileDetailsIcons>
        <ProfileIcon src={Icon} alt="" />
        <ProfileIcon src={Icon} alt="" />
        <ProfileIcon src={Icon} alt="" />
      </ProfileDetailsIcons>
    </ProfileDetailsContainer>
  );
};

export default ProfileDetails;
