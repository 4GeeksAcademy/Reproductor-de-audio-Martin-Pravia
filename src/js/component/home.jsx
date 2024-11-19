import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://playground.4geeks.com/sound/songs")
      .then((response) => {
        if (!response.ok) {
          throw Error("Ha ocurrido un error");
        }
        return response.json();
      })
      .then((dataRecived) => {
        console.log(dataRecived);
        setSongs(dataRecived.songs);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <div className="text-start">
        <ol className="list-group list-group-numbered">
          {songs.map((song, index) => (
            <li
              key={song.id}
              className="list-group-item list-group-item-action list-group-item-success"
            >
              {song.name}
            </li>
          ))}
        </ol>
      </div>
      <footer className="bg-dark text-center py-2 position-fixed bottom-0 w-100">
        <div className="d-flex justify-content-around align-items-center">
          <button className="btn btn-secondary">
            <i className="bi bi-skip-backward-btn-fill"></i>
          </button>
          <button className="btn btn-secondary">
            <i className="bi bi-pause-btn-fill"></i>
          </button>
          <button className="btn btn-secondary">
            <i className="bi bi-play-btn-fill"></i>
          </button>
          <button className="btn btn-secondary">
            <i className="bi bi-skip-forward-btn-fill"></i>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Home;
