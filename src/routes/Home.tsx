import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home-text-area">
        <h1>Portfolio</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, possimus. Veritatis nisi incidunt exercitationem ipsam necessitatibus soluta nam commodi iure! Unde nisi expedita neque mollitia fugiat animi repellat ducimus, molestias vitae, rerum saepe natus aperiam assumenda!</p>
      </div>
      <div className="home-cards">
        <div className="card-container">
          <div className="card-header" id="card-header-1">
            <h3>titulo-card</h3>
          </div>
        </div>
        <div className="card-container">
          <div className="card-header" id="card-header-2">
            <h3>titulo-card</h3>
          </div>
        </div>
        <div className="card-container">
          <div className="card-header" id="card-header-3">
            <h3>titulo-card</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
