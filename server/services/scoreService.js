import scores from "../data/scores.js";

export const getScores = () => scores;

export const addScore = (match) => {
  scores.push(match);
  return scores;
};

export const updateScore = (id, updatedData) => {
  const index = scores.findIndex(
    (item) => item.id === id
  );

  if (index !== -1) {
    scores[index] = {
      ...scores[index],
      ...updatedData,
    };
  }

  return scores;
};