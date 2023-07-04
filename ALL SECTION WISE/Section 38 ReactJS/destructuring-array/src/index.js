// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./    cars";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
  // coloursByPopularity: hondaTopColour
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed }
  // coloursByPopularity: teslaTopColour
} = tesla;

// const [teslaTopColour] = tesla.coloursByPopularity
// const [hondaTopColour] = honda.coloursByPopularity

const { coloursByPopularity: [hondaTopColour]} = honda;
const { coloursByPopularity: [teslaTopColour]} = tesla;

//other way

// const [honda, tesla] = cars;

// const {
//   speedStats: { topSpeed: hondaTopSpeed }
// } = honda;

// const {
//   speedStats: { topSpeed: teslaTopSpeed }
// } = tesla;

// const {
//   coloursByPopularity: [, hondaTopColour]      //accessing 2nd color
// } = honda;
// const {
//   coloursByPopularity: [, teslaTopColour]
// } = tesla;



ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
