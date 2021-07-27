import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post-avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-header-text">
              <h3>
                {displayName}{" "}
                <span className="post-header-special">
                  {verified && <VerifiedUserIcon className="post-verified" />} @
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post-headerDescription">
              <p>{text} </p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post-footer">
            <ChatBubbleOutlineIcon
              fontSize="small"
              className="post-footer-icon"
            />
            <RepeatIcon fontSize="small" className="post-footer-icon" />
            <FavoriteBorderIcon fontSize="small" className="post-footer-icon" />
            <PublishIcon fontSize="small" className="post-footer-icon" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
