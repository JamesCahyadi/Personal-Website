import "./index.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
