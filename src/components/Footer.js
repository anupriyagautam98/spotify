import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ zIndex: 11 }}>
      <div className="playing">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1pCGqFmgfxRdyCZt4yDqVxX1pftB_E3QOw&usqp=CAU"
          alt=""
        />
        <h5>Lately</h5>
        <i className="fas fa-heart"></i>
        <i className="far fa-window-maximize"></i>
      </div>
      <div className="controls">
        <div className="play-buttons">
          <i className="fas fa-random"></i>
          <i className="fas fa-step-backward"></i>
          <i className="fas fa-play-circle"></i>
          <i className="fas fa-step-forward"></i>
          <i className="fas fa-retweet"></i>
        </div>
        <div className="seek"></div>
      </div>
      <div className="options">
        <i className="fas fa-mobile"></i>
        <i className="fas fa-stream"></i>
        <i className="fas fa-volume-up"></i>
        <div className="vol-seek"></div>
      </div>
    </div>
  );
};

export default Footer;
