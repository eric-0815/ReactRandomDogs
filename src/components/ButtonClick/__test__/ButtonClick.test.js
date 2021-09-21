import React from "react";
import ReactDOM from "react-dom";
import ButtonClick from "./../ButtonClick";


it("renders withot crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ButtonClick />, div);
  });

