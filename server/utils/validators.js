export const validateScore = (data) => {
  const errors = {};

  if (!data.teamA?.trim())
    errors.teamA = "Team A is required";

  if (!data.teamB?.trim())
    errors.teamB = "Team B is required";

  if (data.scoreA === "" || data.scoreA === undefined)
    errors.scoreA = "Score A is required";

  if (data.scoreB === "" || data.scoreB === undefined)
    errors.scoreB = "Score B is required";

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};