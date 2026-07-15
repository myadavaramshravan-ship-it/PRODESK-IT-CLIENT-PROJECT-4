import ScoreCard from "./ScoreCard";

const ScoreList = ({
  scores,
  updateScore,
  deleteScore,
}) => {
  return (
    <div className="score-list">
      {scores.map((match) => (
        <ScoreCard
          key={match.id}
          match={match}
          updateScore={updateScore}
          deleteScore={deleteScore}
        />
      ))}
    </div>
  );
};

export default ScoreList;