import { useEffect, useState } from "react";

import useSocket from "../hooks/useSocket";

import ScoreForm from "../components/scoreboard/ScoreForm";
import ScoreList from "../components/scoreboard/ScoreList";

import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";

const Scoreboard = () => {
  const { socket, connected } = useSocket();

  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    socket.on("scores", (data) => {
      setScores(data);
      setLoading(false);
    });

    socket.on("validation-error", (err) => {
      setErrors(err);
    });

    return () => {
      socket.off("scores");
      socket.off("validation-error");
    };
  }, [socket]);

  const addScore = (match) => {
    socket.emit("add-score", match);

    console.log(
      "[Analytics] User interacted with WebSockets Scoreboard"
    );
  };

  const updateScore = (match) => {
    socket.emit("update-score", match);

    console.log(
      "[Analytics] User interacted with WebSockets Scoreboard"
    );
  };

  const deleteScore = (id) => {
    socket.emit("delete-score", id);

    console.log(
      "[Analytics] User interacted with WebSockets Scoreboard"
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="scoreboard-page">

      <header className="header">
        <h1>🏆 Live WebSocket Scoreboard</h1>

        <p
          className={connected ? "status online" : "status offline"}
          role="status"
          aria-live="polite"
        >
          {connected ? "🟢 Connected" : "🔴 Reconnecting..."}
        </p>
      </header>

      <section aria-labelledby="score-form-heading">

        <h2
          id="score-form-heading"
          className="visually-hidden"
        >
          Add Match
        </h2>

        <ScoreForm
          addScore={addScore}
          errors={errors}
        />

      </section>

      <section aria-labelledby="matches-heading">

        <h2
          id="matches-heading"
          className="visually-hidden"
        >
          Current Matches
        </h2>

        {scores.length === 0 ? (
          <EmptyState />
        ) : (
          <ScoreList
            scores={scores}
            updateScore={updateScore}
            deleteScore={deleteScore}
          />
        )}

      </section>

    </main>
  );
};

export default Scoreboard;