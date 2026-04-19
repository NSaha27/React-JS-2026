import { useState } from "react";

function Candidate({
  candidate,
  isAllowedToVote,
  isVoteOver,
  onReceivingVote,
}) {
  const [isVoteGiven, setIsVoteGiven] = useState(false);
  const handlePressBtnClick = (constituency, party) => {
    onReceivingVote(constituency, party);
    setIsVoteGiven(true);
  };
  return (
    <div className="">
      <span
        className={`p-1 rounded-[50%] border-2 ${isVoteGiven && !isVoteOver ? "bg-green-500" : "bg-red-500"}`}
      ></span>
      <span className="">{candidate.Candidate}</span>
      <span className="">{candidate.party}</span>
      <button
        className=""
        onClick={() =>
          handlePressBtnClick(candidate["AC_Name"], candidate["party"])
        }
        disabled={!isAllowedToVote}
      >
        Press
      </button>
    </div>
  );
}

export default Candidate;
