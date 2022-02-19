import React from "react";
import Card from "./Card";

const HotNewReleases = ({
  newReleases,
  token,
  setTracks,
}) => {
  // console.log(newReleases);
  return (
    <div className="more">
      <div className="ttle">
        <div>
          <h1>Hot Releases</h1>
        </div>
        <div>
          <h6>See all</h6>
        </div>
      </div>
      <div className="recent-container">
        {newReleases.length >= 0 &&
          newReleases.map((release, idx) => (
            <Card
              key={idx}
              image={release.images[0].url}
              name={release.artists[0].name}
              description={release.name}
              id={release.id}
              token={token}
              url={release.href}
              setTracks={setTracks}
            />
          ))}
      </div>
    </div>
  );
};

export default HotNewReleases;
