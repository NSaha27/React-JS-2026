import { useState } from "react";

function VoteController({
  constituencies,
  onSetConstituency,
  voterList,
  onAllowBtnToggle,
  isAllowedToVote,
  isVoteOver,
  constWiseTotalNumOfVotes,
}) {
  const [voterID, setVoterID] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [constituency, setConstituency] = useState("");

  let numOfVotesDone = 0;
  for (let district in voterList) {
    voterList[district].forEach((votr) => {
      if (votr["constituency"] === constituency && votr["voted_for"] !== "") {
        numOfVotesDone += 1;
      }
    });
  }

  const handleVoterIDChange = (event) => {
    const id = event.target.value;
    setVoterID(id);
  };

  const handleCheckBtnClick = () => {
    for (let district in voterList) {
      voterList[district].forEach((voter) => {
        if (voter["voter_id"] === voterID) {
          console.log(voter["constituency"], constituency);

          if (
            voter["constituency"].toLowerCase() !== constituency.toLowerCase()
          ) {
            alert("*** this voter is not from the constituency, you set!");
            return;
          }
          if (voter["voted_for"] !== "") {
            alert("*** this voter has already given his vote!");
            return;
          }
          setIsAuthenticated(true);
        }
      });
    }
  };

  const handleConstituencyChange = (event) => {
    setConstituency(event.target.value);
  };

  const handleSetBtnClick = () => {
    onSetConstituency(constituency);
  };

  const handleAllowBtnToggle = (voterID) => {
    onAllowBtnToggle(voterID);
  };

  const handleResetBtnClick = () => {
    setVoterID("");
    setIsAuthenticated(false);
  };

  return (
    <div className="p-8 border-r-2">
      <div className="">
        <table className="table-fixed">
          <tbody>
            <tr>
              <td>
                <label htmlFor="constituency">Constituency: </label>
              </td>
              <td>
                <select
                  name="constituency"
                  id="constituency"
                  className=""
                  value={constituency}
                  disabled={constituency ? true : false}
                  onChange={handleConstituencyChange}
                >
                  <option value="" disabled>
                    Select a constituency
                  </option>
                  {constituencies.map((constituency, index) => {
                    return (
                      <option value={constituency} key={index}>
                        {constituency}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>
                <button className="" onClick={handleSetBtnClick}>
                  SET
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Voter ID: </strong>
              </td>
              <td>
                <input
                  type="text"
                  name="voterID"
                  id="voterID"
                  className=""
                  value={voterID}
                  onChange={handleVoterIDChange}
                  placeholder="enter voter id number"
                />
              </td>
              <td>
                <button className="" onClick={handleCheckBtnClick}>
                  CHECK
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="">
        <span
          className={`py-4 px-8 border-2 border-black text-black ${isAuthenticated ? "bg-green-400" : "bg-red-400"}`}
        >
          {isAuthenticated ? "Eligible" : "Not Eligible"}
        </span>
      </div>
      <div className="">
        <button
          className="disabled:bg-gray-500"
          disabled={isAuthenticated ? false : true}
          onClick={() => handleAllowBtnToggle(voterID)}
        >
          {isAllowedToVote ? "Disallow" : "Allow"}
        </button>
      </div>
      <div className="">
        <button
          className={`text-white ${!isVoteOver ? "bg-gray-500" : "bg-red-500"}`}
          disabled={!isVoteOver}
          onClick={handleResetBtnClick}
        >
          Reset
        </button>
      </div>
      <div className="">
        <table className="">
          <thead>
            <tr>
              <th>Total no. of votes</th>
              <th>No. of votes done</th>
              <th>No. of votes remained</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{constWiseTotalNumOfVotes}</td>
              <td>{numOfVotesDone}</td>
              <td>{constWiseTotalNumOfVotes - numOfVotesDone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VoteController;
