import React from "react";
import Card from "./Card";

const Charts = ({ charts, token, setTracks }) => {
  return (
    <div className="more">
      <div className="ttle">
        <div>
          <h1>Charts</h1>
        </div>
        <div>
          <h6>See all</h6>
        </div>
      </div>
      <div className="recent-container">
        {charts.length >= 0 &&
          charts.map((chart, idx) => (
            <Card
              key={idx}
              image={chart.images[0].url}
              name={chart.artists[0].name}
              description={chart.name}
              id={chart.id}
              token={token}
              url={chart.href}
              setTracks={setTracks}
            />
          ))}
      </div>
    </div>
  );
};

export default Charts;
