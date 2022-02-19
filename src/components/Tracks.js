import "./tracks.css";

const Tracks = ({ tracks }) => {
  console.log(tracks);
  return (
    <div className="tracks">
      <div className="details">
        <img src={tracks.images[0].url} alt="imagessss" />
        <div className="track-details">
          <h3>{tracks.album_type}</h3>
          <h1>{tracks.name}</h1>
          <h4>{tracks.label}</h4>
          <p>
            {" "}
            <strong>Spotify </strong>{" "}
            <span>. {tracks.popularity} Likes . </span>
            {tracks.tracks.items.length} Songs{" "}
          </p>
        </div>
      </div>
      <div className="play-heart-dots">
        <i className="fas fa-play-circle"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-random"></i>
      </div>
      <div className="track-tables">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>TITILE</th>
              <th>BY</th>
              <th>DATE ADDED</th>
              <th>PLAY TIME</th>
            </tr>
          </thead>
          <tbody>
            {tracks.tracks.items.map((track, idx) => (
              <tr key={idx}>
                <td>{track.track_number}</td>
                <td className="table-img-div">
                  {" "}
                  <img
                    src={tracks.images[0].url}
                    alt=""
                  />{" "}
                  <div>{track.name}</div>{" "}
                </td>
                <td>{track.artists[0].name}</td>
                <td>6 Days Ago</td>
                <td>{`${parseInt(
                  track.duration_ms / 60000
                )}:${
                  parseInt(track.duration_ms / 1000) % 60 <
                  10
                    ? (parseInt(track.duration_ms / 1000) %
                        60) *
                      10
                    : parseInt(track.duration_ms / 1000) %
                      60
                }`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tracks;
