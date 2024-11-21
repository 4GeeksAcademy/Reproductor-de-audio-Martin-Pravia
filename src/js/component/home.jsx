import React, { useState, useEffect, useRef } from "react";

//create your first component
const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentIndexOfSong, setCurrentIndexOfSong] = useState(0);
  const audio = useRef(null);

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

  const playSong = (index) => {
    setCurrentIndexOfSong(index);
    console.log(audio.current);
    audio.current.src = `https://playground.4geeks.com${songs[index].url}`;
    audio.current.play();
    console.log(audio);
  };

  const stopSong = (index) => {
    audio.current.pause();
  };

  const nextSong = () => {
    const next =
      currentIndexOfSong >= songs.length - 1 ? 0 : currentIndexOfSong + 1;
    playSong(next);
  };

  const prevSong = () => {
    const prev =
    currentIndexOfSong >= songs.length - 1 ? 0 : currentIndexOfSong + 1;
    playSong(next);

  }

  return (
    <>
      <div className="text-start">
        <ol className="list-group list-group-numbered">
          {songs.map((song, index) => (
            <li
              key={song.id}
              className="list-group-item list-group-item-action list-group-item-success"
              onClick={() => playSong(index)}
            >
              {song.name}
            </li>
          ))}
        </ol>
      </div>
      <footer className="bg-dark text-center py-2 position-fixed bottom-0 w-100">
        <audio ref={audio}></audio>
        <div className="d-flex justify-content-around align-items-center">
          <button className="btn btn-secondary">
            <i className="bi bi-skip-backward-btn-fill"></i>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => audio.current.pause()}
          >
            <i className="bi bi-pause-btn-fill"></i>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => audio.current.play()}
          >
            <i className="bi bi-play-btn-fill"></i>
          </button>
          <button
            className="btn btn-secondary"
            onClick={nextSong}
          >
            <i className="bi bi-skip-forward-btn-fill"></i>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Home;
