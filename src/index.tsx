import { StrictMode } from "react";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { theme } from "./exports/assets.exports";
import App from "./app";
import store from "./services/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
