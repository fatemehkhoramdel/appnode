import React from "react";

export default function Cities() {
  return (
    <div class="overview">
      <h1 id="city" class="city-style">
        New York
      </h1>
      <ul class="ul-style">
        <li id="dayandtime" class="li-style">
          Last update:Monday 12:25
        </li>
        <li id="description" class="li-style">
          Overcast clouds
        </li>
      </ul>
      <div class="row">
        <div class="col-6">
          <div class="clearfixe wether-temp">
            <img src="" alt="" id="icon" />

            <strong id="temperature">7 </strong>
            <span id="units" class="unite">
              <a href="#" id="celsius" class="active underline">
                °C{" "}
              </a>
              |
              <a href="#" id="fahrenheit" class="underline">
                °F{" "}
              </a>
            </span>
          </div>
        </div>
        <div class="col-6">
          <ul class="ul-style">
            <li id="Precipitation" class="li-style">
              Precipitation: 0%
            </li>
            <li class="li-style">
              Humidity: <span id="Humidity"></span> 10%
            </li>
            <li class="li-style">
              Wind: <span id="Wind"></span>40Km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
