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

        // hover constant
        const tip = svg
          .append("g")
          .style("pointer-events", "none")
          .style("text-anchor", "middle");
        
        leaf
          .append("rect")
          .attr("fill", d => {
            while (d.depth > 1) d = d.parent;
            return color(d.data.name);
          })
          .attr("opacity", "0.7")
          .attr("width", d => d.x1 - d.x0)
          .attr("height", d => d.y1 - d.y0)
          .on("mouseover", function(d) {
            d3.select(this)
              .attr('opacity', '1')
              .attr("stroke", "black")
           const reg = d.target.__data__.key
            tooltip
              .style("visibility", "visible") // Make tooltip visible
              // Add text
              .html(` 
                <div>Group: ${d.target.__data__.data.name}</div>
                <div>${d.target.__data__.data.value} times</div>
              `);
           })
           .on("mousemove", function(e) {
            tooltip
              .style("top", e.pageY - 10 + "px")
              .style("left", e.pageX + 10 + "px");
            })
          .on("mouseout", function() {
            d3.select(this)
                .attr('opacity', '0.7')
                .attr("stroke", 0);
            tooltip.style("visibility", "hidden"); // Hide visibility
          });
        
          const tooltip = d3
          .select("body")
          .append("div")
          .style("position", "absolute")
          .style("visibility", "hidden") // Default should be hidden until hovered over
          .style("background", "white")
          .style("border-radius", "5pt")
          .style("color", "black")
          .style("border", "1pt solid #3BEAD1")
          .style("font-family", "sans-serif")
          .style("font-size", "25px")
          .style("line-height", "25px")
          .style("padding", "10px 10px")
          .style("visibility", "hidden");
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