export default class PieChart {
  constructor(input) {
    this.title = input.title;
    this.data = input.data;
    this.tag = input.tag;

    this.width = input.width || 600;
    this.height = input.height || 450;
    this.innerWidth = (input.width - 50) || 550;
    this.innerHeight = (input.height - 50) || 400;

    this.margin = input.margin || { top: 20, right: 20, bottom: 20, left: 30 };
    this.color = input.color || "#ddd";
    this.angle = input.angle || false;
  }

  render() {
    var radius = 135;
    var svg = d3.select(".graph-gender")
      .attr('height', 450)
      .attr('width', 400)
      .append("g")
      .attr("transform", "translate(170,195)")


    var data = { yes: 55, no: 35, "decline to say": 8 }

    var color = d3.scaleOrdinal()
      .domain(data)
      .range(d3.schemeSet2);

    var pie = d3.pie()
      .value(function (d) { return d.value; })
    var data_ready = pie(d3.entries(data))

    var arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)

    svg
      .selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', function (d) { return (color(d.data.key)) })
      .style("opacity", 0.6)

    svg
      .selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('text')
      .text(function (d) { return d.data.key })
      .attr("transform", function (d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
      .style("font-size", 12)

    svg.append("text")
      .attr("x", 5)
      .attr("text-anchor", "middle")
      .attr("y", -205)
      .text(this.title);
  }
}