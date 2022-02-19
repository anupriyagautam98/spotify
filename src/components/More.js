import React from "react";
import Card from "./Card";
import "./more.css";
const More = ({ featured, token, setTracks }) => {
  return (
    <div className="more">
      <div className="ttle">
        <div>
          <h1>More Of What You Like</h1>
          <p>Hear a little bit of everything you love</p>
        </div>
        <div>
          <h6>See all</h6>
        </div>
      </div>
      <div className="recent-container">
        {featured.length >= 0 &&
          featured.map((feat, idx) => (
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

export default More;
