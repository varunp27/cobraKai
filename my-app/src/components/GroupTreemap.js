import React, {Component} from 'react';
import * as d3 from "d3";

export default class GroupTreemap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.groupData
        }
    }

    componentDidMount() {
        this.drawChart();
        console.log(this.state.data)

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

    //     let width = 700;
    //     let height = 700;
    //     d3.format(",d")
    //     d3.scaleOrdinal(d3.schemeCategory10)

         console.log(group_counts)

    //     //this.groupviz = React.createRef()

        
    //     d3
    //         .treemap()
    //         .tile(d3.treemapSquarify)
    //         .size([width, height])
    //         .padding(1)
    //         .round(true)(
    //         d3
    //         .hierarchy(group_counts)
    //         .sum(d => d.value)
    //         .sort((a, b) => b.value - a.value)
    //     )
    }

    render() {
        return(
            <div>
                <h3>Your JSON data</h3>
                <p>{ JSON.stringify(this.state.data) }</p>

                <div ref="groupviz"></div>
            </div>
        )
    }
}