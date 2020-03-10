const LINKS = [
  "introduction",
  "demographics",
  "connections",
  "conclusions"
];

const linkShow = (link) => {
  for (let i = 0; i < LINKS.length; i++) {
    document.querySelector(`.${LINKS[i]}-div`).style.display = "none";
  }
  document.querySelector(`.${link}-div`).style.display = "block";
}

document.addEventListener('DOMContentLoaded', (event) => {
  let style = document.querySelector(".mobile-drop-down").style;

  document.querySelector(".main-header-nav").addEventListener("click", () => {
    if (style.height === "125px") {
      style.height = "0px";
      style.borderBottom = "none";
    } else {
      style.height = "125px";
      style.borderBottom = "1px solid #c4dfff";
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
      style.height = "0px";
      style.borderBottom = "none";
    }
  });

  for (let i = 0; i < LINKS.length; i++) {
    let links = document.querySelectorAll(`.${LINKS[i]}-link`);
    for (let j = 0; j < links.length; j++) {
      document.querySelectorAll(`.${LINKS[i]}-link`)[j].addEventListener("click", () => {
        linkShow(`${LINKS[i]}`)
      })
    }
  }



  // D3 code starts here for first bar graph.

  const data = [
    { name: "Other", value: "0.005" },
    { name: "Non-Binary", value: "0.08" },
    { name: "Male", value: "0.32" },
    { name: "Female", value: "0.58" },
  ];


  
  // Constants for height width and margin.
  
  const height = 400;
  const width = 550;
  const margin = ({ top: 20, right: 20, bottom: 20, left: 30 });


  
  // X and Y scale functions are below.

  const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height - margin.bottom, margin.top]);


    
  // The X and Y axis functions.

  const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  const formatPercent = d3.format(".0%");

  const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickFormat(formatPercent));

  const svg = d3.select('svg');

  const g = svg.append("g").attr("fill", "orange");

  g.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("width", x.bandwidth());

  svg.append("g").call(xAxis);

  svg.append("g").call(yAxis);

})