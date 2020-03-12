export default class WordCloud {
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
    this.sideways = input.sideways || false;
  }

  render() {
    if (!this.sideways) {
      var svg = d3.select(this.tag).append("svg")
      // .style("margin-top", 1000000)
      .attr("width", 1000)
      .attr("height", 750)
      .append("g")
      .attr("transform", "translate(-75,-32.5)");

      var layout = d3.layout.cloud()
        .size([1000, 750])
        .words(this.data.map(function (d) { return { text: d.name, size: (d.value * 5) }; }))
        .padding(5)
        // .rotate(function () { return 0; })
        .fontSize(function (d) { return d.size; })
        .on("end", draw);
      layout.start();

      function draw(words) {
        svg
          .append("g")
          .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
          .selectAll("text")
          .data(words)
          .enter().append("text")
          .style("font-size", function (d) { return (d.size + "px"); })
          .style("fill", "cornflowerblue")
          .style("opacity", "0.75")
          .style("font-weight", "200")
          .attr("text-anchor", "middle")
          .style("font-family", "sans-serif")
          .attr("transform", function (d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function (d) { return d.text; });
      }
    } else {
      var svg = d3.select(this.tag).append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .style("margin-top", 500)
        .append("g")
        .attr("transform", "translate(-50,-350)");
  
      var layout = d3.layout.cloud()
        .size([450, 1800])
        .words(this.data.map(function (d) { return { text: d.name, size: (d.value * 5) }; }))
        .padding(5)
        .rotate(function () { return 90; })
        .fontSize(function (d) { return d.size; })
        .on("end", draw);
      layout.start();
  
      function draw(words) {
        svg
          .append("g")
          .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
          .selectAll("text")
          .data(words)
          .enter().append("text")
          .style("font-size", function (d) { return (d.size + "px"); })
          .style("fill", "cornflowerblue")
          .style("opacity", "0.75")
          .style("font-weight", "200")
          .attr("text-anchor", "middle")
          .style("font-family", "sans-serif")
          .attr("transform", function (d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function (d) { return d.text; });
      }
    }
  }
}