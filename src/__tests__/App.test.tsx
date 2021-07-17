import { render } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("<App />", () => {
  it("renders <App /> correctly", () => {
    const { getByText } = render(<App />);

    expect(getByText("Front End Mentor Challenge.")).toBeTruthy();
  });
});
