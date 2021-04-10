import "./index.css";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from "./App";
import GA4React from "ga-4-react";
import React from "react";
import ReactDOM from "react-dom";
import { teal } from "@material-ui/core/colors";

const ga4react = new GA4React("G-1JXXXXX");

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});

(async () => {
  await ga4react.initialize();

  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
