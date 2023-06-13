import React, { useState } from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitsCount = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);
  const [likeCount, setLikeCount] = useState(tuit.likes);
  const [disliked, setDisliked] = useState(tuit.disliked);
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

  const handledisLikeClick = () => {
    if (disliked) {
      setDislikeCount(dislikeCount + 1);
    } else {
      setDislikeCount(dislikeCount - 1);
    }
    setDisliked(!disliked);
    dispatch(updateTuitThunk({ ...tuit, dislikes: dislikeCount }));
  };
  const DislikeIcon = disliked ? BiDislike : BiDislike;
  const dislikeColor = disliked ? "red" : "";
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

        <div className="col" onClick={handledisLikeClick}>
          <DislikeIcon style={{ color: dislikeColor }} />
          &nbsp;
          <span>{tuit.dislikes}</span>
        </div>

        <CiShare2 className="col" />
      </div>
    </>
  );
};

export default TuitsCount;
