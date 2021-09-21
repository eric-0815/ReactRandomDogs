import React, { Component } from "react";
import "./App.css";
import RenderDog from "./components/RandomDog/RenderDog";
import ButtonClick from "./components/ButtonClick/ButtonClick";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/3198012/pexels-photo-3198012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260/")`,
      }}
    >
      <RenderDog />
      <br />
      <ButtonClick />
      <br />
      <Footer />
    </div>
  );
}

export default App;
