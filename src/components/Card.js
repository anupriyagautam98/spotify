import axios from "axios";
import React from "react";
import { useHistory } from "react-router";

const Card = ({
  image,
  name,
  description,
  token,
  url,
  setTracks,
}) => {
  const history = useHistory();
  const onClick = () => {
    const uri = `${url}/?limit=5`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(uri, config)
      .then((response) => {
        setTracks(response.data);
        history.push("/tracks");
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
  };

  return (
    <div className="recent-card" onClick={onClick}>
      <img src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p>
          {description.length < 25
            ? description
            : description.substr(0, 25) + "..."}
        </p>
      </div>
    </div>
  );
};

export default Card;
