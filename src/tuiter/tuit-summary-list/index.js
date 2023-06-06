import React from "react";
import TuitSummaryItem from "./tuit-summary-item";
import tuitsArray from "../reducers/tuits.json"

const TuitSummaryList = () => {

  return (
    <ul className="list-group">
      {tuitsArray.map((tuit) => (
        <TuitSummaryItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};

export default TuitSummaryList;
