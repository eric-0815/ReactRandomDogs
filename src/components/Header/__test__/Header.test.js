import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders withot crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});
