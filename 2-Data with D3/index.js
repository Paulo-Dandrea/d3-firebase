import * as d3 from "https://cdn.skypack.dev/d3@7";

// const data = [
//   { width: 200, height: 200, fill: "pink" },
//   { width: 50, height: 100, fill: "blue" },
//   { width: 20, height: 50, fill: "green" },
// ];

// const svg = d3.select("svg");

// const rects = svg.selectAll("rect").data(data).enter().append("rect");

// rects
//   .attr("width", (data, index, arrOfChildrenElementsOfTheSelection) => {
//     return data.width;
//   })
//   .attr("height", function (d) {
//     return d.height;
//   })
//   .attr("fill", (d) => d.fill);

//   (d,i,n) => n[i] === function(d) {this}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// JSON = PLANETS

const svg = d3.select("svg");

d3.json("planets.json").then((data) => {
  const circs = svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", (d) => d.radius)
    .attr("fill", (d) => d.fill)
    .attr("cx", (d) => d.distance)
    .attr("cy", (d) => 100);
});
