import React, {Component} from 'react';
import * as d3 from "d3";

export default class likesBarChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.groupData // filter out the data you're getting from front end, likes data?
        }
        this.drawChart = this.drawChart.bind(this);
    }

    componentDidMount() {
        this.drawChart();
        console.log(this.state.data); 
    }

    componentDidUpdate() {
        this.drawChart();
    }

    drawChart() {
        // TODO: Implement likes bar chart
        console.log(this.state.data)
        this.state = {
            data: this.props.groupData // likes data? 
        }

        let likes = this.state.data; 
        let media_likes = likes.media_likes; 
        let likes_last_year = []; 
        let currDate = new Date(); 
        const oneyear = 31556952000;

        for (let i = 0; i < media_likes.length; i++) {
            let data = media_likes[i];
            let date = new Date(data[0]);
            if (currDate - date < oneyear) {
            likes_last_year.push(data[1]);
            }
        }

        let top_ten_likes = {};

        for (let i = 0; i < likes_last_year.length; i++) {
            if (!top_ten_likes[likes_last_year[i]]) {
              // if no key for that number yet
              top_ten_likes[likes_last_year[i]] = 0; // then make one
            }
            ++top_ten_likes[likes_last_year[i]];
        }

        let count = 0;
        let sorted_top_ten = [];
        let sorted_top_ten_list = [];
        for (var likes in top_ten_likes) {
            sorted_top_ten.push([likes, top_ten_likes[likes]]);
        }

        sorted_top_ten.sort(function(a, b) {
            return b[1] - a[1];
        });

        for (var i = 0; i < sorted_top_ten.length; i++) {
            // sorted_top_ten_list.push(sorted_top_ten[i]);
            let newObj = {};
            newObj.name = sorted_top_ten[i][0];
            newObj.value = sorted_top_ten[i][1];
            sorted_top_ten_list.push(newObj);
            count++;
            if (count == 10) {
            break;
            }
        }

        let x = d3
            .scaleBand()
            .domain(d3.range(sorted_top_ten.length))
            .range([margin.left, width - margin.right])
            .padding(0.2);
        
        let xAxis = g =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
            d3
            .axisBottom(x)
            .tickFormat(i => sorted_top_ten[i].name)
            .tickSizeOuter(0)
        );

        let y = d3
            .scaleLinear()
            .domain([0, d3.max(sorted_top_ten, d => d.value)])
            .nice()
            .range([height - margin.bottom, margin.top]);
        
        let yAxis = g =>
        g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(null, sorted_top_ten.format))
            .call(g => g.select(".domain").remove())
            .call(g =>
            g.append("text")
                .attr("x", -margin.left)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text(sorted_top_ten.y)
            );
        
        let margin = ({ top: 30, right: 0, bottom: 30, left: 40 });

        let barChart = data => {
            const svg = d3.select('#area')
            .attr("viewBox", [0, 0, 800, 800]);
          
            svg
              .append("g")
              .attr("fill", "steelblue")
              .selectAll("rect")
              .data(sorted_top_ten_list)
              .join("rect")
              .attr("x", (d, i) => x(i))
              .attr("y", d => y(d.value))
              .attr("height", d => y(0) - y(d.value))
              .attr("width", x.bandwidth());
          
            svg
              .append("g")
              .call(xAxis)
              .selectAll("text")
              .style("text-anchor", "end")
              .attr("transform", function(d) {
                return "rotate(-30)";
              });
          
            svg.append("g").call(yAxis);
          
            return svg.node();
        }
    }

    render() {
        return(
            <div id='barChart'>
                <svg id='area'></svg>
            </div>
        )
    }
}