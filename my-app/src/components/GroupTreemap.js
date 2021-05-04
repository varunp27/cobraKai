import React, {Component} from 'react';
import * as d3 from "d3";

export default class GroupTreemap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.groupData
        }
        this.drawChart = this.drawChart.bind(this)
    }

    componentDidMount() {
        // this.state = {
        //     data: this.props.groupData
        // }
         this.drawChart();
        
        //console.log(this.state.data)

    }

    componentDidUpdate() {
        // this.state = {
        //     data: this.props.groupData
        // }
        this.drawChart()
    }

    drawChart() {
        console.log(this.state.data)

        let group_data = this.state.data.group_interactions[0].entries
        let group_counts = { children: [] };

        var i;
        for (i = 0; i < group_data.length; i++) {
            group_counts.children.push({
                name: group_data[i].data.name,
                value: parseInt(group_data[i].data.value.split(" ")[0])
            });
        }

        let width = 1500;
        let height = 800;
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
      
        leaf
          .append("rect")
          .attr("fill", d => {
            while (d.depth > 1) d = d.parent;
            return color(d.data.name);
          })
          .attr("width", d => d.x1 - d.x0)
          .attr("height", d => d.y1 - d.y0);
      
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
                <svg id='area'></svg>
            </div>
        )
    }
}