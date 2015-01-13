var fs = require('fs');
var d3 = require('d3');
var xmldom = require('xmldom');

var data = [56, 99, 14, 12, 46, 33, 22, 100, 87, 6, 55, 44, 27, 28, 34];

var height = 400;
var barWidth = 25;

var x = d3.scale.linear()
   .domain([0, d3.max(data)])
   .range([0, height]);

console.log(x(100)); // returns 400

svg = d3.select("body")
   .append("svg")
   .attr("width", data.length * (barWidth +1))
   .attr("height", height);

svg.append("rect")
   .attr("width", data.length * (barWidth +1))
   .attr("height", height)
   .attr("z-index", -1)
   .attr("fill", "yellow");

svg.selectAll("#rect")
   .data(data)
   .enter()
   .append("rect")
   .attr("fill","red")
   .attr("stroke","black")
   .attr("x", function(d,i) {
          return i * (barWidth + 1);
    })
   .attr("y", function(d) {
          return height - (x(d));
    })
   .attr("width", barWidth)
   .attr("height", x);

// add the namespace, save to the file
var svgGraph = d3.select('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg');
var svgXML = (new xmldom.XMLSerializer())
                 .serializeToString(svgGraph[0][0]).toLowerCase();

fs.writeFile('chart.svg', svgXML);

