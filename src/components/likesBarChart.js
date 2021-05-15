import React, {Component} from 'react';
import * as d3 from "d3";
import {BarChart} from 'react-d3-chart-graphs'

export default class LikesBarChart extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     data: this.props.groupData // filter out the data you're getting from front end, likes data?
        // }
        this.drawChart = this.drawChart.bind(this);
    }

    componentDidMount() {
        this.drawChart();
      //  console.log(this.state.data); 
    }

    componentDidUpdate() {
        this.drawChart();
    }

    drawChart() {
        // let count = 1;
        // let string = "";
        // console.log(localStorage.getItem("count"))
        // for (let i = 0; i < localStorage.getItem("count"); i++) {
        //     let key = "postsState" + count;
        //     string = string + localStorage.getItem(key);
        //     count++;
        // }

        // console.log(string)

        // let string = localStorage.getItem("postsState")

        // let reactions_data = JSON.parse(string);
        // reactions_data.reactions.forEach(
        //     obj => (obj.timestamp = new Date(obj.timestamp * 1000))
        // )

        // console.log(reactions_data)

        // let reactions_last_year = [];
        // let currDate = new Date();
        // const oneyear = 31556952000;
        // for (let i = 0; i < reactions_data.reactions.length; i++) {
        //     let data = reactions_data.reactions[i];
        //     let date = data.timestamp;
        //     if (currDate - date < oneyear) {
        //     reactions_last_year.push(data);
        //     }
        // }

        // console.log(reactions_last_year)

        // let reaction_count = new Map();
        // for (let i = 0; i < reactions_last_year.length; i++) {
        //     let reaction_type = reactions_last_year[i].data[0].reaction.reaction;
        //     if (reaction_count.has(reaction_type)) {
        //     reaction_count.set(reaction_type, reaction_count.get(reaction_type) + 1);
        //     } else {
        //     reaction_count.set(reaction_type, 1);
        //     }
        // }

        // // let reaction_count_sorted = new Map(
        // //   [...reaction_count.entries()].sort((a, b) => b[1] - a[1])
        // // );
        // let reaction_count_array = [];

        // reaction_count.forEach((value, key) => {
        //     let newObj = {};
        //     newObj.name = key;
        //     newObj.value = value;
        //     reaction_count_array.push(newObj);
        // });

        // console.log(reaction_count_array)
        // console.log(reaction_count)

        // let margin = ({ top: 30, right: 0, bottom: 30, left: 40 });
        // let width = 700;
        // let height = 700

        // let x = d3
        // .scaleBand()
        // .domain(d3.range(reaction_count.length))
        // .range([margin.left, width - margin.right])
        // .padding(0.2)

        // let xAxis = g =>
        // g.attr("transform", `translate(0,${height - margin.bottom})`).call(
        //   d3
        //     .axisBottom(x)
        //     .tickFormat(i => reaction_count[i].name)
        //     .tickSizeOuter(0)
        // )

        // let y = d3
        // .scaleLinear()
        // .domain([0, d3.max(reaction_count, d => d.value)])
        // .nice()
        // .range([height - margin.bottom, margin.top])

        // let yAxis = g =>
        // g
        //   .attr("transform", `translate(${margin.left},0)`)
        //   .call(d3.axisLeft(y).ticks(null, reaction_count_array.format))
        //   .call(g => g.select(".domain").remove())
        //   .call(g =>
        //     g
        //       .append("text")
        //       .attr("x", -margin.left)
        //       .attr("y", 10)
        //       .attr("fill", "currentColor")
        //       .attr("text-anchor", "start")
        //       .text(reaction_count.y)
        //   )
    
        
          
        //   const svg = d3.select("#likesChart").attr("viewBox", [0, 0, 800, 800]);

        //   svg
        //     .append("g")
        //     .attr("fill", "steelblue")
        //     .selectAll("rect")
        //     .data(reaction_count)
        //     .join("rect")
        //     .attr("x", (d, i) => x(i))
        //     .attr("y", d => y(d.value))
        //     .attr("height", d => y(0) - y(d.value))
        //     .attr("width", x.bandwidth());
        
        //   svg
        //     .append("g")
        //     .call(xAxis)
        //     .selectAll("text")
        //     .style("text-anchor", "end")
        //     .attr("transform", function(d) {
        //       return "rotate(-30)";
        //     });
        
        //   svg.append("g").call(yAxis);
        
        //   return svg.node();



        
    }

    render() {


        let string = localStorage.getItem("postsState")

        let reactions_data = JSON.parse(string);
        reactions_data.reactions.forEach(
            obj => (obj.timestamp = new Date(obj.timestamp * 1000))
        )

        console.log(reactions_data)

        let reactions_last_year = [];
        let currDate = new Date();
        const oneyear = 31556952000;
        for (let i = 0; i < reactions_data.reactions.length; i++) {
            let data = reactions_data.reactions[i];
            let date = data.timestamp;
            if (currDate - date < oneyear) {
            reactions_last_year.push(data);
            }
        }

        console.log(reactions_last_year)

        let reaction_count = new Map();
        for (let i = 0; i < reactions_last_year.length; i++) {
            let reaction_type = reactions_last_year[i].data[0].reaction.reaction;
            if (reaction_count.has(reaction_type)) {
            reaction_count.set(reaction_type, reaction_count.get(reaction_type) + 1);
            } else {
            reaction_count.set(reaction_type, 1);
            }
        }

        // let reaction_count_sorted = new Map(
        //   [...reaction_count.entries()].sort((a, b) => b[1] - a[1])
        // );
        let reaction_count_array = [];

        reaction_count.forEach((value, key) => {
            let newObj = {};
            newObj.title = key;
            newObj.value = value;
            reaction_count_array.push(newObj);
        });

        console.log(reaction_count_array)
        console.log(reaction_count)

        const colorScale = {
            min: '#3bead1',
            max: '#3bead1',
        };

        const handleBarHover = (item) => {
            console.log('hovered', item);
        };
    
        const handleBarClick = (item) => {
            console.log('clicked', item);
        };



        const axesProps = {
            legend: {
                xAxis: 'Reaction Type',
                yAxis: 'Number of Clicks',
            },
            padding: {
                xAxis: 20,
                yAxis: 20,
            }
            //ticksCount: 6,
            // tickFormat: {
            //     xAxis: function(value) {
            //         return `${value} - formated`;
            //     },
            // },
        };


        return(
            <div id='barChart'>
                <BarChart axesProps={axesProps}
                          data={reaction_count_array}
                          colorScale={colorScale} 
                          handleBarHover={handleBarHover}
                          handleBarClick={handleBarClick} />
                
            </div>
        )
    }
}