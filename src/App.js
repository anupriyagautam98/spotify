import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";
import ContentTopBar from "./components/Content-TopBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Tracks from "./components/Tracks";

function App() {
  const clientID = "306f45b1f1f24f76b861632e8b7d41de";
  const clientSecret = "8421c6d230ca49c4b0fff92f316fa734";
  const [token, setToken] = useState("");
  const [newReleases, setNewReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);

  const getNewReleases = async (token) => {
    const url =
      "https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then((response) => {
        setNewReleases(response.data.albums.items);
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
  };

  // const getFeatured = async (token) => {
  //   const url =
  //     "https://api.spotify.com/v1/browse/featured-playlists?limit=10";
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   axios
  //     .get(url, config)
  //     .then((response) => {
  //       setFeatured(response.data.playlists.items);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log("error");
  //     });
  // };

  useEffect(() => {
    setLoading(true);
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(clientID + ":" + clientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    })
      .then((response) => {
        console.log(response.data.access_token);
        getNewReleases(response.data.access_token);
        setToken(response.data.access_token);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <ContentTopBar />
        <Switch>
          {!loading && (
            <Route
              exact
              path="/"
              render={(props) => (
                <Content
                  newReleases={newReleases}
                  token={token}
                  setTracks={setTracks}
                />
              )}
            />
          )}
          <Route
            exact
            path="/tracks"
            render={(props) => <Tracks tracks={tracks} />}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
