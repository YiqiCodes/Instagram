import React from "react";

import PostImageOne from "../../assets/img/PostOne.JPG";
import PostImageTwo from "../../assets/img/PostTwo.JPG";
import PostImageThree from "../../assets/img/PostThree.JPG";
import ProfilePic from "../../assets/img/Yiqi.jpg";
import LikeIcon from "../../assets/img/Heart.png";
import CommentIcon from "../../assets/img/Comment.png";
import MessageIcon from "../../assets/img/Message.png";
import SaveIcon from "../../assets/img/Save.png";
import {
  PostsContainerDiv,
  PostContainerDiv,
  PostTitleDiv,
  ProfilePictureDiv,
  ProfileNameDiv,
  PostTitleLeft,
  PostImageDiv,
  ProfileSettings,
  PostFooterDiv,
  PostFooterIconDiv,
  PostFooterTextDiv,
  PostFooterLikedByDiv,
  PostFooterCaptionDiv,
  PostFooterViewAllCommentsDiv,
  // PostFooterAddCommentDiv,
  PostFooterTimeDiv,
  BottomIconImage,
  // IconContainerDiv,
} from "./Home.styles";

const Posts = () => {
  return (
    <PostsContainerDiv>
      {/*First Post*/}
      <PostContainerDiv>
        <PostTitleDiv>
          <PostTitleLeft>
            <ProfilePictureDiv src={ProfilePic} alt=""></ProfilePictureDiv>
            <ProfileNameDiv>zhangyiqi</ProfileNameDiv>
          </PostTitleLeft>
          <ProfileSettings>...</ProfileSettings>
        </PostTitleDiv>

        <PostImageDiv src={PostImageTwo} alt="" />
        <PostFooterDiv>
          <PostFooterIconDiv>
            <div style={{ height: "100%" }}>
              <BottomIconImage src={LikeIcon} alt="" />
              <BottomIconImage src={CommentIcon} alt="" />
              <BottomIconImage src={MessageIcon} alt="" />
            </div>
            <div style={{ height: "100%", paddingRight: "5px" }}>
              <BottomIconImage src={SaveIcon} alt="" />
            </div>
          </PostFooterIconDiv>
          <PostFooterTextDiv>
            <PostFooterLikedByDiv>
              Liked by TestUser and others
            </PostFooterLikedByDiv>
            <PostFooterCaptionDiv>zhangyiqi immersion</PostFooterCaptionDiv>
            <PostFooterViewAllCommentsDiv>
              View all 17 comments
            </PostFooterViewAllCommentsDiv>
            {/* <PostFooterAddCommentDiv>Add a comment...</PostFooterAddCommentDiv> */}
            <PostFooterTimeDiv>11 minutes ago</PostFooterTimeDiv>
          </PostFooterTextDiv>
        </PostFooterDiv>
      </PostContainerDiv>

      {/*Second Post*/}
      <PostContainerDiv>
        <PostTitleDiv>
          <PostTitleLeft>
            <ProfilePictureDiv src={ProfilePic} alt=""></ProfilePictureDiv>
            <ProfileNameDiv>zhangyiqi</ProfileNameDiv>
          </PostTitleLeft>
          <ProfileSettings>...</ProfileSettings>
        </PostTitleDiv>

        <PostImageDiv src={PostImageOne} alt="" />
        <PostFooterDiv>
          <PostFooterIconDiv>
            <div style={{ height: "100%" }}>
              <BottomIconImage src={LikeIcon} alt="" />
              <BottomIconImage src={CommentIcon} alt="" />
              <BottomIconImage src={MessageIcon} alt="" />
            </div>
            <div style={{ height: "100%", paddingRight: "5px" }}>
              <BottomIconImage src={SaveIcon} alt="" />
            </div>
          </PostFooterIconDiv>
          <PostFooterTextDiv>
            <PostFooterLikedByDiv>
              Liked by TestUser and others
            </PostFooterLikedByDiv>
            <PostFooterCaptionDiv>
              zhangyiqi oh i forgot it's summertime
            </PostFooterCaptionDiv>
            <PostFooterViewAllCommentsDiv>
              View all 21 comments
            </PostFooterViewAllCommentsDiv>
            {/* <PostFooterAddCommentDiv>Add a comment...</PostFooterAddCommentDiv> */}
            <PostFooterTimeDiv>2 hours ago</PostFooterTimeDiv>
          </PostFooterTextDiv>
        </PostFooterDiv>
      </PostContainerDiv>

      {/*Third Post*/}
      <PostContainerDiv>
        <PostTitleDiv>
          <PostTitleLeft>
            <ProfilePictureDiv src={ProfilePic} alt=""></ProfilePictureDiv>
            <ProfileNameDiv>zhangyiqi</ProfileNameDiv>
          </PostTitleLeft>
          <ProfileSettings>...</ProfileSettings>
        </PostTitleDiv>

        <PostImageDiv src={PostImageThree} alt="" />
        <PostFooterDiv>
          <PostFooterIconDiv>
            <div style={{ height: "100%" }}>
              <BottomIconImage src={LikeIcon} alt="" />
              <BottomIconImage src={CommentIcon} alt="" />
              <BottomIconImage src={MessageIcon} alt="" />
            </div>
            <div style={{ height: "100%", paddingRight: "5px" }}>
              <BottomIconImage src={SaveIcon} alt="" />
            </div>
          </PostFooterIconDiv>
          <PostFooterTextDiv>
            <PostFooterLikedByDiv>
              Liked by TestUser and others
            </PostFooterLikedByDiv>
            <PostFooterCaptionDiv>
              zhangyiqi home is canada
            </PostFooterCaptionDiv>
            <PostFooterViewAllCommentsDiv>
              View all 6 comments
            </PostFooterViewAllCommentsDiv>
            {/* <PostFooterAddCommentDiv>Add a comment...</PostFooterAddCommentDiv> */}
            <PostFooterTimeDiv>8 hours ago</PostFooterTimeDiv>
          </PostFooterTextDiv>
        </PostFooterDiv>
      </PostContainerDiv>
    </PostsContainerDiv>
  );
};

export default Posts;
