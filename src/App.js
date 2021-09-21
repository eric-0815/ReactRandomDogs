import React, { Component } from "react";
import "./App.css";
import RenderDog from "./components/RandomDog/RenderDog";
import Button_Click from "./components/Button/Button";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <Container>
      <Row>
        <RenderDog />
      </Row>
      <Row>
        <Button_Click />
      </Row>
    </Container>
  );
}

export default App;
