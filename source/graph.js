export default class Graph {
  constructor(title, subtitle, data, type) {
    this.title = title;
    this.subtitle = subtitle;
    this.data = data;
    this.data = data;
    this.type = type;
  }

  barGraph() {
    let data = [
      { name: "artist / peer", value: "0.198" },
      { name: "instagram", value: "0.733" },
      { name: "other", value: "0.069" },
    ];

    let height = 400;
    let width = 550;
    let margin = ({ top: 20, right: 20, bottom: 20, left: 30 });
    let x = d3.scaleBand().domain(data.map(d => d.name)).range([margin.left, width - margin.right]).padding(0.1);
    let y = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([height - margin.bottom, margin.top]);
    let xAxis = g => g.attr("transform", `translate(0,${height - margin.bottom})`).call(d3.axisBottom(x));
    let yAxis = g => g.attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y).tickFormat(d3.format(".0%")));
    let svg = d3.select('.graph-found-survey');
    let g = svg.append("g");
    
    g.selectAll("rect").data(data).join("rect").attr("x", d => x(d.name)).attr("y", d => y(d.value)).attr("height", d => y(0) - y(d.value)).attr("width", x.bandwidth());
    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  }

  test() {
    alert('hello!')
  }
}