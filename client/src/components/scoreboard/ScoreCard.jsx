import { useState } from "react";

const ScoreCard = ({
  match,
  updateScore,
  deleteScore,
}) => {
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    ...match,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    updateScore({
      ...formData,
      scoreA: Number(formData.scoreA),
      scoreB: Number(formData.scoreB),
    });

    setEditing(false);
  };

  return (
    <article className="score-card">

      {editing ? (
        <>
          <input
            type="text"
            name="teamA"
            value={formData.teamA}
            onChange={handleChange}
            aria-label="Edit Team A"
          />

          <input
            type="number"
            name="scoreA"
            value={formData.scoreA}
            onChange={handleChange}
            aria-label="Edit Team A Score"
          />

          <input
            type="text"
            name="teamB"
            value={formData.teamB}
            onChange={handleChange}
            aria-label="Edit Team B"
          />

          <input
            type="number"
            name="scoreB"
            value={formData.scoreB}
            onChange={handleChange}
            aria-label="Edit Team B Score"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            aria-label="Match Status"
          >
            <option value="LIVE">LIVE</option>
            <option value="FINISHED">FINISHED</option>
            <option value="UPCOMING">UPCOMING</option>
          </select>

          <div className="actions">
            <button
              onClick={handleUpdate}
              aria-label="Save Match"
            >
              Save
            </button>

            <button
              onClick={() => setEditing(false)}
              aria-label="Cancel Editing"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="visually-hidden">
            {match.teamA} versus {match.teamB}
          </h2>

          <div className="teams">

            <p className="team-name">
              {match.teamA}
            </p>

            <span className="score">
              {match.scoreA}
            </span>

            <span className="vs">
              VS
            </span>

            <span className="score">
              {match.scoreB}
            </span>

            <p className="team-name">
              {match.teamB}
            </p>

          </div>

          <p className="match-status">
            {match.status}
          </p>

          <div className="actions">

            <button
              onClick={() => setEditing(true)}
              aria-label={`Edit ${match.teamA} versus ${match.teamB}`}
            >
              Edit
            </button>

            <button
              onClick={() => deleteScore(match.id)}
              aria-label={`Delete ${match.teamA} versus ${match.teamB}`}
            >
              Delete
            </button>

          </div>
        </>
      )}

    </article>
  );
};

export default ScoreCard;