import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SearchForm from "./searchForm";

import "./App.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <SearchForm />
    </div>
  </StrictMode>
);
