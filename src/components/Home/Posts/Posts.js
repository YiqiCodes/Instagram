import React from "react";

// Helpers
import { PostIcons } from "../../../Helpers/Icons";

// Styles
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
  const postContents = [
    {
      username: "zhangyiqi",
      profilePicture: PostIcons[3],
      postImage: PostIcons[1],
      likedBy: "banksy and 918 others",
      caption: "immersion",
      totalComments: 17,
      timeStamp: "11 minutes ago",
    },
    {
      username: "zhangyiqi",
      profilePicture: PostIcons[3],
      postImage: PostIcons[0],
      likedBy: "instagram and 841 others",
      caption: "oh i forgot it's summertime",
      totalComments: 21,
      timeStamp: "2 hours ago",
    },
    {
      username: "zhangyiqi",
      profilePicture: PostIcons[3],
      postImage: PostIcons[2],
      likedBy: "natgeo and 1039 others",
      caption: "home is canada",
      totalComments: 6,
      timeStamp: "8 hours ago",
    },
  ];

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

            <PostImageDiv src={post.postImage} alt="" />
            <PostFooterDiv>
              <PostFooterIconDiv>
                <PostFooterLeftDiv>
                  <BottomIconImage src={PostIcons[4]} alt="" />
                  <BottomIconImage src={PostIcons[5]} alt="" />
                  <BottomIconImage src={PostIcons[6]} alt="" />
                </PostFooterLeftDiv>
                <PostFooterRightDiv>
                  <BottomIconImage src={PostIcons[7]} alt="" />
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
