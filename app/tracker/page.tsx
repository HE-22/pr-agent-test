"use client";

import { useState } from "react";

export default function TrackerPage() {
  const [loggedToday, setLoggedToday] = useState(false);

  return (
    <>
      <h1 className="page-title" data-testid="page-tracker-title">
        Tracker
      </h1>
      <p className="lead">Progress and habits — matches the mobile Tracker tab.</p>
      <div className="card" data-testid="tracker-card">
        <p data-testid="tracker-helper" style={{ color: "var(--muted)", marginTop: 0 }}>
          Build a consistent daily rhythm with one quick check-in.
        </p>
        <p data-testid="tracker-status" style={{ marginTop: 0 }}>
          {loggedToday ? "Streak saved" : "Ready to save streak"}
        </p>
        <button
          data-testid="log-today-button"
          onClick={() => setLoggedToday(true)}
          style={{
            background: "var(--accent)",
            border: 0,
            borderRadius: 8,
            color: "#18130a",
            cursor: "pointer",
            fontWeight: 800,
            padding: "0.7rem 1rem",
          }}
        >
          Save streak
        </button>
      </div>
    </>
  );
}
