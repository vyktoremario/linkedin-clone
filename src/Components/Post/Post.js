import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "../InputOption/InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src="" />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey" />
        <InputOption Icon={ChatOutlinedIcon} title="Like" color="grey" />
        <InputOption Icon={ShareOutlinedIcon} title="Like" color="grey" />
        <InputOption Icon={SendOutlinedIcon} title="Like" color="grey" />
      </div>
    </div>
  );
}

export default Post;
