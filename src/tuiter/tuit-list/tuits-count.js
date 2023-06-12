import React, { useState } from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitsCount = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);
  const [likeCount, setLikeCount] = useState(tuit.likes);
  const [dislikes, setDisliked] = useState(tuit.dislikes);
  const [dislikeCount, setDislikeCount] = useState(tuit.dislikes);
  const dispatch = useDispatch();
  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setLiked(!liked);
    dispatch(updateTuitThunk({ ...tuit, likes: likeCount }));
  };
  const LikeIcon = liked ? FaHeart : AiOutlineHeart;
  const likeColor = liked ? "red" : "";
  return (
    <>
      <div className="column" style={{ display: "flex", alignItems: "center" }}>
        <div className="col">
          <FaRegComment />
          &nbsp;
          <span>{tuit.replies}</span>
        </div>
        <div className="col">
          <FaRetweet />
          &nbsp;
          <span>{tuit.retuits}</span>
        </div>
        <div className="col" onClick={handleLikeClick}>
          <LikeIcon style={{ color: likeColor }} />
          &nbsp;
          <span>{tuit.likes}</span>
        </div>
        <BiDislike
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
          }
        />
        &nbsp;
        <span className="ms-2">{tuit.dislikes}</span>
        <CiShare2 className="col" />
      </div>
    </>
  );
};

export default TuitsCount;
