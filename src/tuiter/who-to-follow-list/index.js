import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";
const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  return (
    <ul className="list-group col col-xl-3 col-lg-3 d-none d-md-none d-lg-inline d-xl-inline right-column">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {whoArray.map((who) => (
        <WhoToFollowListItem key={who._id} who={who} />
      ))}
    </ul>
  );
};
export default WhoToFollowList;
