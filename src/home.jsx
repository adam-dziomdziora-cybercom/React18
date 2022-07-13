import React from 'react';

import './style/home.scss';

const Home = () => {
  return (
    <div className="text-effect centered-div">
      <h1 className="neon" data-text="I love ReactJS">
        I love ReactJS
      </h1>
      <div className="gradient"></div>
      <div className="spotlight"></div>
    </div>
  );
};

export default Home;
