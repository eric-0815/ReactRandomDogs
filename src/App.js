import React, { Component } from "react";
import "./App.css";
import RenderDog from "./components/RandomDog/RenderDog";
import ButtonClick from "./components/ButtonClick/ButtonClick";
<<<<<<< Updated upstream
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
=======
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
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
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
