import React, {Component} from 'react';
import * as d3 from "d3";



export default class GroupTreemap extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     data: this.props.groupData
        // }
        this.drawChart = this.drawChart.bind(this)
    }

    componentDidMount() {
        // this.state = {
        //     data: this.props.groupData
        // }
         this.drawChart();
        
        //console.log(this.state.data)

    }

    componentWillUnmount() {

    }

    

    drawChart() {
       // console.log(this.state.data)
       let data = JSON.parse(localStorage.getItem('groupState'));

        let group_data = data.group_interactions[0].entries
        let group_counts = { children: [] };

        var i;
        for (i = 0; i < group_data.length; i++) {
            group_counts.children.push({
                name: group_data[i].data.name,
                value: parseInt(group_data[i].data.value.split(" ")[0])
            });
        }

        let width = 500;
        let height = 250;
        let format = d3.format(",d")
        let color = d3.scaleOrdinal()
            .range(["#FFE5B4", "#aaf0d1", "#dcd0ff", "#add8e6"])

        console.log(group_counts)



        //hover code

        var tooltip = d3.select("#area")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")



  // A function that change this tooltip when the user hover a point.
  // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
  }

  var mousemove = function(d) {
    tooltip
      .html("The exact value of<br>the Ground Living area is: ")
      .style("left", (d3.pointer(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      .style("top", (d3.pointer(this)[1]) + "px")
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

        let treemap = data =>
        d3
            .treemap()
            .tile(d3.treemapSquarify)
            .size([width, height])
            .padding(1)
            .round(true)(
            d3
            .hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value)
        )

        const root = treemap(group_counts);

        const svg = d3.select('#area')
          .attr("viewBox", [0, 0, width, height])
          .style("font", "10px sans-serif");
      
        const leaf = svg
          .selectAll("g")
          .data(root.leaves())
          .join("g")
          .attr("transform", d => `translate(${d.x0},${d.y0})`);
      
        leaf
          .append("rect")
          .attr("fill", d => {
            while (d.depth > 1) d = d.parent;
            return color(d.data.name);
          })
          .attr("width", d => d.x1 - d.x0)
          .attr("height", d => d.y1 - d.y0)
          .on("mouseover", mouseover )
          .on("mousemove", mousemove )
          .on("mouseleave", mouseleave )
      
        leaf
          .append("text")
          .selectAll("tspan")
          .data(d => d.data.name.split(/(?=[A-Z][a-z])|\s+/g).concat(format(d.value)))
          .join("tspan")
          .attr("x", 3)
          .attr(
            "y",
            (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`
          )
          .text(d => d);
      
        return svg.node();
    }

    render() {
        return(
            <div id='treemap'>
                <h3>Group Interactions</h3>
                <svg id='area'></svg>
            </div>
        )
    }
}