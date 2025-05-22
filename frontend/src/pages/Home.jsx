import React from "react";
import Name from "../component/home/Name";
import Description from "../component/home/Description";
import IntroText from "../component/home/IntroText";

const Home = () => {
  return (
    <section className="home d-flex align-items-start flex-column justify-content-center min-vh-100 px-3">
      <IntroText />
      <Name />
      <Description />
    </section>
  );
};

export default Home;
