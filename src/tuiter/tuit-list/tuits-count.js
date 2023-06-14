import React, { useState } from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitsCount = ({ tuit }) => {
  const [isLiked, setIsLiked] = useState(tuit.liked);
  const [likeCount, setLikeCount] = useState(tuit.likes);
  const [isDisliked, setIsDisliked] = useState(tuit.disliked);
  const [dislikeCount, setDislikeCount] = useState(tuit.dislikes);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    setLikeCount((prevLikeCount) => {
      const newLikeCount = isLiked ? prevLikeCount - 1 : prevLikeCount + 1;
      dispatch(updateTuitThunk({ ...tuit, likes: newLikeCount }));
      return newLikeCount;
    });
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const handledisLikeClick = () => {
    setDislikeCount((prevDislikeCount) => {
      const newDislikeCount = isDisliked
        ? prevDislikeCount - 1
        : prevDislikeCount + 1;
      dispatch(updateTuitThunk({ ...tuit, dislikes: newDislikeCount }));
      return newDislikeCount;
    });
    setIsDisliked((prevIsDisliked) => !prevIsDisliked);
  };

  const LikeIcon = isLiked ? FaHeart : AiOutlineHeart;
  const likeColor = isLiked ? "red" : "";
  const DislikeIcon = isDisliked ? BiDislike : BiDislike;
  const dislikeColor = isDisliked ? "red" : "";
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
