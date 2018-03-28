/*
*    main.js
*    Mastering Data Visualization with D3.js
*    S3 NOTES
*/


/* --------------
			S2 L10
----------------*/

// RECT 1 (first way)
var rect1 = d3.select("#rect1");
var rect = rect1.append("rect");
rect.attr("cx", 25);
rect.attr("cy", 25);
rect.attr("x", 25);
rect.attr("y", 0);
rect.attr("width", 150);
rect.attr("height", 60);
rect.attr("fill", "blue");

// RECT 2 (second way)
// "x" and "y" coordinates give a shape its position (top left hand corner)
var rect2 = d3.select("#rect2")
	.append("rect")
		.attr("x", 25)
		.attr("y", 0)
		.attr("r", 100)
		.attr("width", 150)
		.attr("height", 60)
		.attr("fill", "red");

// CIRCLE
// For circles, choose the center with "cx" and "cy", and the radius with "r"
var circle = d3.select("#circle")
	.append("circle")
		.attr("cx", 30)
		.attr("cy", 30)
		.attr("r", 25)
		.attr("fill", "green");

// ELLIPSE
// Ellipses are similar, but they take "ry" and "rx" attributes
var ellipse = d3.select("#ellipse")
.append("ellipse")
	.attr("cx", 30)
	.attr("cy", 30)
	.attr("rx", 15)
	.attr("ry", 25)
	.attr("fill", "grey");

// LINE
// Lines need two paris of coordinates and a stroke width
var line = d3.select("#line")
.append("line")
	.attr("x1", 0)
	.attr("y1", 0)
	.attr("x2", 130)
	.attr("y2", 60)
	.attr("stroke", "orange")
	.attr("stroke-width", 4);

// PATH
var path = d3.select("#path")
.append("path")
	.attr("d", "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")
	.attr("fill", "transparent")
	.attr("stroke", "black");

// TEXT
// Text takes an x/y coordinate and a font size
var text = d3.select("#text")
.append("text")
	.text("D3js Text via JS")
	.attr("x", 0)
	.attr("y", 30)
	.attr("font-size", "18px")
	.attr("fill", "black")
	.attr("stroke-width", 4);



/* --------------
			S2 L12
----------------*/

// ARRAY DATA JOIN
var data = [25, 20, 10, 12, 15];

var svg = d3.select("#array-data-join").append("svg")
	.attr("width", 400)
	.attr("height", 60);

var circles = svg.selectAll("circle")
	.data(data);

circles.enter()
	.append("circle")
		.attr("cx", function(d, i){
			return (i * 50) + 25;
		})
		.attr("cy", 25)
		.attr("r", function(d){
			return d;
		})
		.attr("fill", "red");



/* --------------
			S2 L13
----------------*/

// FILE DATA JOIN (CSV, TSV, JSON)
var svg = d3.select("#file-data-join").append("svg")
	.attr("width", 400)
	.attr("height", 60);

d3.json("data/ages.json", function(error, data){
	if (error) throw error;

	console.log(data);

data.forEach(function(d){
	d.age = +d.age;
})

var circles = svg.selectAll("circle")
	.data(data);

circles.enter()
	.append("circle")
		.attr("cx", function(d, i){
				return (i * 50) + 25;
		})
		.attr("cy", 25)
		.attr("r", function(d){
				return d.age * .3;
		})
		// Each circles size value is equal to person age value.
		.attr("fill", function(d){
				if (d.name == "Sergio Andrade") {
						return "green";
				}			
				if (d.name == "Julio Rangel") {
						return "blue";
				}
				if (d.name == "Sergio Eduardo") {
						return "red";
				}
				if (d.name == "Evandro Natividade") {
						return "brown";
				}
				if (d.name == "Eric Caldas") {
					return "orange";
				}				
				else {
						return "red";
				}
		});
});