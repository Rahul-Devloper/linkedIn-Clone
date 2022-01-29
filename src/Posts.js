import { ChatOutlined, SendOutlined, ShareOutlined } from '@mui/icons-material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Avatar } from "@mui/material"
import React from "react"
import InputOption from "./InputOption"
import "./Posts.css"

const Posts = ({ name, description, message, photoUrl }) => {
  const buttons = [
      { title: "Like", Icon: ThumbUpOutlinedIcon, color: "gray" },
      { title: "Comment", Icon: ChatOutlined, color: "gray" },
      { title: "Share", Icon: ShareOutlined, color: "gray" },
      { title: "Send", Icon: SendOutlined, color: "gray" },
    ]
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description} </p>
        </div>
      </div>
      <div className="post_body">
        <p> {message}</p>
      </div>

      <div className="post_buttons">
        {buttons?.map((i) => (
          <InputOption key={i.title} title={i.title} Icon={i.Icon} color={i.color} />
        ))}
      </div>
    </div>
  )
}

export default Posts
