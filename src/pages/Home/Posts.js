import React from "react";

import PostImageOne from "../../assets/img/PostOne.JPG";
import PostImageTwo from "../../assets/img/PostTwo.JPG";
import PostImageThree from "../../assets/img/PostThree.JPG";
import ProfilePic from "../../assets/img/Yiqi.jpg";
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
  PostFooterAddCommentDiv,
  PostFooterTimeDiv,
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
          <PostFooterIconDiv>Icons</PostFooterIconDiv>
          <PostFooterTextDiv>
            <PostFooterLikedByDiv>
              Liked by TestUser and others
            </PostFooterLikedByDiv>
            <PostFooterCaptionDiv>
              This is my photo caption ... more
            </PostFooterCaptionDiv>
            <PostFooterViewAllCommentsDiv>
              View all 17 comments
            </PostFooterViewAllCommentsDiv>
            <PostFooterAddCommentDiv>Add a comment...</PostFooterAddCommentDiv>
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
          <PostFooterIconDiv>Icons</PostFooterIconDiv>
          <PostFooterTextDiv>
            <PostFooterLikedByDiv>
              Liked by TestUser and others
            </PostFooterLikedByDiv>
            <PostFooterCaptionDiv>
              This is my photo caption ... more
            </PostFooterCaptionDiv>
            <PostFooterViewAllCommentsDiv>
              View all 17 comments
            </PostFooterViewAllCommentsDiv>
            <PostFooterAddCommentDiv>Add a comment...</PostFooterAddCommentDiv>
            <PostFooterTimeDiv>11 minutes ago</PostFooterTimeDiv>
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
          <PostFooterIconDiv>Icons</PostFooterIconDiv>
          <PostFooterTextDiv>
            <PostFooterLikedByDiv>
              Liked by TestUser and others
            </PostFooterLikedByDiv>
            <PostFooterCaptionDiv>
              This is my photo caption ... more
            </PostFooterCaptionDiv>
            <PostFooterViewAllCommentsDiv>
              View all 17 comments
            </PostFooterViewAllCommentsDiv>
            <PostFooterAddCommentDiv>Add a comment...</PostFooterAddCommentDiv>
            <PostFooterTimeDiv>11 minutes ago</PostFooterTimeDiv>
          </PostFooterTextDiv>
        </PostFooterDiv>
      </PostContainerDiv>
    </PostsContainerDiv>
  );
};

export default Posts;
