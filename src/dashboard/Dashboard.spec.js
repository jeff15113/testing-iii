// Test away
import React from "react";
import ReactDOM from "react-dom";
import {
  cleanup,
  render,
  fireEvent,
  wait,
  waitForElement
} from "react-testing-library";

import Dashboard from "./Dashboard";

afterEach(cleanup);

describe("Dashboard Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
