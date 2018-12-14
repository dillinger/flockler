import React from "react";

export default function Filters() {
  return(
    <div className="filters">
      <span>Filters: </span>
      <a class="filters__link" href="#">
        All
      </a>
      <a className="filters__link" href="#">
        Instagram
      </a>
      <a className="filters__link" href="#">
        Twitter
      </a>
    </div>
  );
}
