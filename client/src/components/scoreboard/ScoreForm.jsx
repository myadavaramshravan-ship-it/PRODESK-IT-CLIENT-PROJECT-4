import { useState } from "react";

const initialState = {
  teamA: "",
  teamB: "",
  scoreA: "",
  scoreB: "",
  status: "LIVE",
};

const ScoreForm = ({ addScore, errors = {} }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (
      !formData.teamA.trim() ||
      !formData.teamB.trim() ||
      formData.scoreA === "" ||
      formData.scoreB === ""
    ) {
      return;
    }

    addScore(formData);

    setFormData(initialState);
  };

  return (
    <form
      className="score-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <input
          type="text"
          name="teamA"
          placeholder="Team A"
          value={formData.teamA}
          onChange={handleChange}
          aria-label="Team A Name"
          className={errors.teamA ? "error" : ""}
        />
        {errors.teamA && (
          <small className="error-text">
            {errors.teamA}
          </small>
        )}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="teamB"
          placeholder="Team B"
          value={formData.teamB}
          onChange={handleChange}
          aria-label="Team B Name"
          className={errors.teamB ? "error" : ""}
        />
        {errors.teamB && (
          <small className="error-text">
            {errors.teamB}
          </small>
        )}
      </div>

      <div className="form-group">
        <input
          type="number"
          name="scoreA"
          placeholder="Score A"
          value={formData.scoreA}
          onChange={handleChange}
          aria-label="Score A"
          className={errors.scoreA ? "error" : ""}
        />
        {errors.scoreA && (
          <small className="error-text">
            {errors.scoreA}
          </small>
        )}
      </div>

      <div className="form-group">
        <input
          type="number"
          name="scoreB"
          placeholder="Score B"
          value={formData.scoreB}
          onChange={handleChange}
          aria-label="Score B"
          className={errors.scoreB ? "error" : ""}
        />
        {errors.scoreB && (
          <small className="error-text">
            {errors.scoreB}
          </small>
        )}
      </div>

      <div className="form-group">
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
      </div>

      <button
        type="submit"
        aria-label="Add Match"
      >
        Add Match
      </button>
    </form>
  );
};

export default ScoreForm;