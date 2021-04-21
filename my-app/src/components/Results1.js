import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";
import GroupTreemap from "./GroupTreemap";

export default class Results1 extends React.Component {


    constructor(props) {
        super(props);
        
        this.state = {
            datafile : JSON.parse(this.props.location.uploadId)
        }
        
    }

    componentDidMount() {
       /* let datafile = JSON.parse(this.props.location.uploadId)
        console.log(datafile)*/
       
    
    }

    

    render() {
        let groups;
        if (typeof this.props.location.uploadId !== 'undefined') {
            groups = JSON.parse(this.props.location.uploadId)
        }
        
        console.log(this.state.datafile)

        let group_data = groups.group_interactions[0].entries

        console.log(group_data)
        return (
            <body className="results1-body">
                <div className="insights">
                    <h2>Here are our insights</h2>
                    <GroupTreemap groupData = {this.state.datafile}/>
                </div>
            </body>
        )
    }
}