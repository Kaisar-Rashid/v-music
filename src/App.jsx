import Navbar from "./components/Navbar";
import "./App.css";
import CardsDisplay from "./components/cardsDisplay";
import { useState } from "react";

function App() {
  const [track, setTrack] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("");

  async function getTracks(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/kaisarrashid/spotify/XvfSEJwDBzYgabWj/search?q=${keyword}&type=track`
      );
      const data = await response.json();
      setTrack(data.tracks.items);
      setKeyword("");
    } catch (error) {
      setError("Error Occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar getTrack={getTracks} keyword={keyword} setKeyword={setKeyword} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <CardsDisplay track={track} />
    </>
  );
}

export default App;
