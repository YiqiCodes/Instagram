import React from "react";

// Helpers
import { postIcons } from "../../../Helpers/Icons";
import { postContents } from "../../../Helpers/Details";

// Styles
import {
  PostsContainerDiv,
  PostContainerDiv,
  PostTitleDiv,
  ProfilePictureDiv,
  ProfileNameDiv,
  PostTitleLeft,
  PostImage,
  PostImageDiv,
  ProfileSettings,
  PostFooterDiv,
  PostFooterIconDiv,
  PostFooterLeftDiv,
  PostFooterRightDiv,
  PostFooterTextDiv,
  PostFooterLikedByDiv,
  PostFooterCaptionDiv,
  PostFooterViewAllCommentsDiv,
  PostFooterTimeDiv,
  BottomIconImage,
} from "./Posts.styles";

const Posts = () => {
  return (
    <PostsContainerDiv>
      {postContents.map((post) => {
        return (
          <PostContainerDiv>
            <PostTitleDiv>
              <PostTitleLeft>
                <ProfilePictureDiv
                  src={post.profilePicture}
                  alt=""
                ></ProfilePictureDiv>
                <ProfileNameDiv>{post.username}</ProfileNameDiv>
              </PostTitleLeft>
              <ProfileSettings>...</ProfileSettings>
            </PostTitleDiv>

            <PostImageDiv>
              <PostImage src={post.postImage} alt="" />
            </PostImageDiv>
            <PostFooterDiv>
              <PostFooterIconDiv>
                <PostFooterLeftDiv>
                  <BottomIconImage src={postIcons[4]} alt="" />
                  <BottomIconImage src={postIcons[5]} alt="" />
                  <BottomIconImage src={postIcons[6]} alt="" />
                </PostFooterLeftDiv>
                <PostFooterRightDiv>
                  <BottomIconImage src={postIcons[7]} alt="" />
                </PostFooterRightDiv>
              </PostFooterIconDiv>
              <PostFooterTextDiv>
                <PostFooterLikedByDiv>
                  Liked by {post.likedBy}
                </PostFooterLikedByDiv>
                <PostFooterCaptionDiv>
                  {post.username} {post.caption}
                </PostFooterCaptionDiv>
                <PostFooterViewAllCommentsDiv>
                  View all {post.totalComments} comments
                </PostFooterViewAllCommentsDiv>
                <PostFooterTimeDiv>{post.timeStamp}</PostFooterTimeDiv>
              </PostFooterTextDiv>
            </PostFooterDiv>
          </PostContainerDiv>
        );
      })}
    </PostsContainerDiv>
  );
};

export default Posts;
