import React from "react";
import ReactDOM from "react-dom";
import Footer from "../Footer";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders withot crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});
