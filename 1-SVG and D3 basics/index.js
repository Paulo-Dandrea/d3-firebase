import * as d3 from "https://cdn.skypack.dev/d3@7";

// Method Chaining
const svg = d3
  .select(".canvas")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

const group = svg.append("g").attr('transform', 'translate(100, 100)');

group.append("rect").attr("width", 100).attr("height", 100).attr("fill", "red");

group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("fill", "blue");

group
  .append("line")
  .attr("x1", 50)
  .attr("y1", 50)
  .attr("x2", 150)
  .attr("y2", 150)
  .attr("stroke", "green");

svg
  .append("text")
  .text("Hello World")
  .attr("x", 50)
  .attr("y", 50)
  .attr("fill", "black")
  .style("font-size", "50px");
