import React from "react";
import Card from "./Card";

const Selected = ({ tile: tiles, token, setTracks }) => {
  console.log(tiles);
  return (
    <div className="recentlyPlayed">
      <h1>Top Picks</h1>
      <div className="recent-container">
        {tiles.length >= 0 &&
          tiles.map((tile, idx) => (
            <Card
              key={idx}
              image={tile.images[0].url}
              name={tile.name}
              description={tile.description}
              id={tile.id}
              token={token}
              url={tile.href}
              //   setTracks={setTracks}
            />
          ))}
      </div>
    </div>
  );
};

export default Selected;
