import React from "react";
import Card from "./Card";

const RecentlyPlayed = ({
  feat: feats,
  token,
  setTracks,
}) => {
  return (
    <div className="recentlyPlayed">
      <h1>Recently Played</h1>
      <div className="recent-container">
        {feats.length >= 0 &&
          feats.map((feat, idx) => (
            <Card
              key={idx}
              image={feat.images[0].url}
              name={feat.artists[0].name}
              description={feat.name}
              id={feat.id}
              token={token}
              url={feat.href}
              setTracks={setTracks}
            />
          ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
