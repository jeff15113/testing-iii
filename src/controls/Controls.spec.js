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

import Controls from "./Controls";

afterEach(cleanup);

describe("Controls Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Controls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Default state is correct", () => {
    const component = render(<Controls />);
    component.getByText("Lock Gate");
    component.getByText("Close Gate");
  });
});
