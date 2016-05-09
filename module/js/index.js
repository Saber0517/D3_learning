//svg
var svg = d3.select("#container").append("svg")
    //width,height
    .attr("width", 500).attr("height", 250);

var g = d3.select("svg")
    .append("g")
    .attr("transform","translate(50,30)");

var data = [1, 3, 5, 7, 8, 4, 3, 7];

var line_generator = d3.svg.line()
.x(function (d, i) {return i;})
.y(function (d) {return d;})


d3.select("g")
.append("path")
.attr("d",line_generator(data)) 