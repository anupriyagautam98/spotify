import React from "react";

const ContentTopBar = () => {
  return (
    <div
      className="contentTopbar"
      style={{ zIndex: "100" }}
    >
      <div className="arrows">
        <i className="fas fa-chevron-circle-left"></i>
        <i className="fas fa-chevron-circle-right"></i>
      </div>
      <div className="barId">
        <div className="pill1">UPGRADE</div>
        <div className="pill2">
          <i className="fas fa-user-circle"></i>
          Anupriya{" "}
          <i className="fas fa-caret-down"></i>
        </div>
        <i className="fas hidden fa-user-circle"></i>
      </div>
    </div>
  );
};

export default ContentTopBar;
