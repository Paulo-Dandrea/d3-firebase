import * as d3 from "https://cdn.skypack.dev/d3@7";


async function fetchAPI() {
  let response = await fetch(
    "https://billboard-api2.p.rapidapi.com/artist-100?range=1-10&date=2019-05-11",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": ENV.RAPID_API_HOST,
        "x-rapidapi-key": ENV.RAPID_API_KEY,
      },
    }
  );
  let data = await response.json();

  return data;
}

const data = fetchAPI().then(async (d) => {
  const arr = await Object.values(d.content);
  const newMap = arr.map((a) => {
    return {
      text: a.artist,
      radius: a["weeks on chart"],
    };
  });

  console.log(newMap);
});

console.log(data);

const circs = d3
  .selectAll("circle")
  .enter()
  .append("circle")
  .attr("r", (d) => d.radius)
  .attr("fill", (d) => d.fill)
  .attr("cx", (d) => d.distance);
