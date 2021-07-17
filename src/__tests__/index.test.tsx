import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import GlobalStyle from "../styles/global-style";

jest.mock("react-dom", () => ({ render: jest.fn() }));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>,
    div
  );
  global.document.getElementById = (id) => (id === "root" ? div : null);
  // eslint-disable-next-line global-require
  require("../index");
  expect(ReactDOM.render).toHaveBeenCalledWith(
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>,
    div
  );
});
