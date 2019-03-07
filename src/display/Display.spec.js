// Test away!
import React from "react";
import ReactDOM from "react-dom";
import {
  cleanup,
  render,
  fireEvent,
  wait,
  waitForElement
} from "react-testing-library";

import Display from "./Display";

afterEach(cleanup);

describe("Display Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Default state is correct", () => {
    const component = render(<Display />);
    component.getByText("Unlocked");
    component.getByText("Open");
  });
});
