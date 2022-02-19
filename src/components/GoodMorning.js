import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import axios from "axios";

const GoodMorning = ({ token, setTile }) => {
  const [categories, setCategories] = useState([]);

  var now = new Date();
  useEffect(() => {
    const url =
      "https://api.spotify.com/v1/browse/categories?limit=5";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then((response) => {
        setCategories(response.data.categories.items);
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="goodMorning">
      <h1>
        {now.getHours() <= 12
          ? "Good Morning"
          : now.getHours() <= 16
          ? "Good Afternoon"
          : "Good Evening"}
      </h1>
      <div className="morning-container">
        {categories.length > 0 &&
          categories.map((category, idx) => (
            <Tile
              key={idx}
              category={category}
              token={token}
              setTile={setTile}
            />
          ))}
      </div>
    </div>
  );
};

export default GoodMorning;
