import React, { Component } from "react";
import "./blogItem.css";
import { HeartIcon } from "../../../assets/iconComponents/Icon-heart";
import { TrashIcon } from "../../../assets/iconComponents/icon-trash";

export const BlogItem = ({ title, description, liked, likePost, deletePost}) => {
  const heartFill = liked ? "crimson" : "black";

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-wrapper">
        <button onClick={likePost} className="secondaryBtn">
          <HeartIcon color={heartFill} />
          Нравится
        </button>
        <button onClick={deletePost} className="secondaryBtn">
          <TrashIcon color='black' />
        </button>
        
      </div>
    </div>
  );
};
