import React, { useState } from "react";
import Charts from "./Charts";
import GoodMorning from "./GoodMorning";
import HotNewReleases from "./HotNewReleases";
import More from "./More";
import RecentlyPlayed from "./RecentlyPlayed";
import Selected from "./Selected";

const Content = ({ token, newReleases, setTracks }) => {
  const feat = newReleases.slice(10, 15);
  const featured = newReleases.slice(15, 20);
  const charts = newReleases.slice(0, 5);
  newReleases = newReleases.slice(5, 10);
  const [tile, setTile] = useState(null);

  return (
    <div className="content">
      <GoodMorning
        token={token}
        setTile={setTile}
        setTracks={setTracks}
      />
      {tile && (
        <Selected
          tile={tile}
          token={token}
          setTracks={setTracks}
        />
      )}
      <RecentlyPlayed
        feat={feat}
        token={token}
        setTracks={setTracks}
      />
      <More
        featured={featured}
        token={token}
        setTracks={setTracks}
      />
      <HotNewReleases
        newReleases={newReleases}
        token={token}
        setTracks={setTracks}
      />
      <Charts
        charts={charts}
        token={token}
        setTracks={setTracks}
      />
    </div>
  );
};

export default Content;
