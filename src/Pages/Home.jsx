import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="lg:absolute lg:-bottom-64 lg:left-32">
        <Banner></Banner>
      </div>
      <div className='h-80'>

      </div>
    </>
  );
};

export default Home;
