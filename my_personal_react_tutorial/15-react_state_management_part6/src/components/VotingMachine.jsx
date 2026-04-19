import Candidate from "./Candidate";

function VotingMachine({
  candidates,
  isAllowedToVote,
  isVoteOver,
  onReceivingVote,
}) {
  return (
    <div className="">
      {candidates.length > 0 ? (
        candidates.map((candidate, index) => {
          return (
            <Candidate
              key={index}
              candidate={candidate}
              isAllowedToVote={isAllowedToVote}
              isVoteOver={isVoteOver}
              onReceivingVote={onReceivingVote}
            />
          );
        })
      ) : (
        <h2 className="">no candidate is yet listed!</h2>
      )}
    </div>
  );
}

export default VotingMachine;
