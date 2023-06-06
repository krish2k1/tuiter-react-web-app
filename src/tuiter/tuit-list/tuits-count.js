import React, { useState } from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import {IoHeart} from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { CiShare2 } from "react-icons/ci";

const TuitsCount = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);
  const [likeCount, setLikeCount] = useState(tuit.likes);

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setLiked(!liked);
  };


  return (
    <>
      <div className="row">
        <a href="#" className="col text-secondary text-decoration-none">
          <FaRegComment />
          <span>{tuit.replies}</span>
        </a>
        <a href="#" className="col text-secondary text-decoration-none">
          <FaRetweet />
          <span>{tuit.retuits}</span>
        </a>
        <a
          href="#"
          className="col text-secondary text-decoration-none"
          onClick={handleLikeClick}
        >
          {liked ? <IoHeart  /> : <FcLike />}
          <span>{likeCount}</span>
        </a>
        <a href="#" className="col text-secondary text-decoration-none">
          <CiShare2 />
        </a>
      </div>
    </>
  );
};

export default TuitsCount;
