import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import RenderDog from "./../RenderDog";

afterEach(cleanup);

it("renders withot crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RenderDog />, div);
});
