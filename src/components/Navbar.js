import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ zIndex: "10" }}>
      <div className="nav-brand">
        <i className="fab fa-spotify"></i>
        <h3>Spotify</h3>
      </div>
      <div className="nav-links">
        <div>
          <i className="fas icon fa-home" /> Home
        </div>
        <div>
          <i className="fas icon fa-search" /> Search
        </div>
        <div>
          <i className="fas icon fa-archive"></i> Your
          Library
        </div>
      </div>
      <div className="CPLS">
        <div>
          <i className="fas icons fa-plus-square"></i>Create
          Playlist
        </div>
        <div>
          <i className="fas icons fa-hand-holding-heart"></i>
          Liked Songs
        </div>
      </div>
      <div className="line-br"></div>
      <div className="install-now">
        <h6>
          Install App <i className="fas fa-download"></i>{" "}
        </h6>
      </div>
    </nav>
  );
};

export default Navbar;
