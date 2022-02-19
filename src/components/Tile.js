import axios from "axios";
import React from "react";

const Tile = ({ category, token, setTile }) => {
  const onClick = () => {
    const url = `${category.href}/playlists?limit=5`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then((response) => {
        console.log(response.data.playlists.items);
        setTile(response.data.playlists.items);
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
  };

  return (
    <div className="morning-divs" onClick={onClick}>
      <img src={category.icons[0].url} alt="play1" />
      <h2>{category.name}</h2>
    </div>
  );
};

export default Tile;
