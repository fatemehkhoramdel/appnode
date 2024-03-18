import React from "react";

import Cities from "./cities";

export default function SearchForm() {
  return (
    <div class="container">
      <div class="weather-app">
        <form id="search-form" class="mb-3">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                id="query"
                name="q"
                placeholder="Search..."
                autocomplete="off"
                class="form-control"
              />
            </div>
            <div class="col-3">
              <input type="submit" value="search" class="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
      <Cities />
    </div>
  );
}
