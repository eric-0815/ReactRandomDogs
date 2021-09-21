import React, { Component } from "react";
import "./App.css";
import RenderDog from "./components/RandomDog/RenderDog";
<<<<<<< Updated upstream
import Button_Click from "./components/Button/Button";
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
      <Button_Click />
      <br />
      <Footer />
=======
import ButtonClick from "./components/ButtonClick/ButtonClick";
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
