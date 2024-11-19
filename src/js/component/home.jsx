import React from "react";


//create your first component
const Home = () => {
  return (
    <>
      <div className="text-start">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item list-group-item-action list-group-item-success">
            A list item
          </li>
          <li class="list-group-item list-group-item-action list-group-item-success">
            A list item
          </li>
          <li class="list-group-item list-group-item-action list-group-item-success">
            A list item
          </li>
        </ol>
      </div>
      <footer className="bg-dark text-center py-2 position-fixed bottom-0 w-100">
        <div className="d-flex justify-content-around align-items-center">
          <button className="btn btn-secondary">
            <i class="bi bi-skip-backward-btn-fill"></i>
          </button>
          <button className="btn btn-secondary">
            <i class="bi bi-pause-btn-fill"></i>
          </button>
          <button className="btn btn-secondary">
            <i class="bi bi-play-btn-fill"></i>
          </button>
          <button className="btn btn-secondary">
            <i class="bi bi-skip-forward-btn-fill"></i>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Home;
