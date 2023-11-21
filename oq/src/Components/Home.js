import React from "react";
import DashBoard from "./DashBoard";
import About from "./About";
import Agenda from "./Agenda";
import Workshop from "./Workshop";
import Register from "./Register";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home_container">
      <DashBoard />
      <About />
      <Agenda />
      <Workshop />
      <Register />
      <Footer />
    </div>
  );
}

export default Home;
