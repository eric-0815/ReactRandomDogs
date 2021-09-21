import React from "react";
import ReactDOM from "react-dom";
import ButtonClick from "./../ButtonClick";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders withot crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ButtonClick />, div);
});
