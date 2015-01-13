// Creates canvas 320 ×200 at 10, 50
var paper = Raphael(10, 50, 320, 400);

// Creates circle at x = 150, y = 140, with radius 100

var circle = paper.circle(150, 140, 100);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f0f");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#ff0");
