import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { ResetCSS } from "./styles/reset";
import { mainTheme } from "./styles/theme";
import GlobalProviders from "./contexts/GlobalProviders";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProviders>
        <ThemeProvider theme={mainTheme}>
          <ResetCSS />
          <App />
        </ThemeProvider>
      </GlobalProviders>
    </BrowserRouter>
  </React.StrictMode>
);
