import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import TabContainer from "./TabContainer";
import GroupTreemap from "./GroupTreemap";

export default class Results1 extends React.Component {


    constructor(props) {
        super(props);
        
        this.state = {
            groupData : JSON.parse(this.props.location.groupData),
            adsData : JSON.parse(this.props.location.adsData),
            pagesData: JSON.parse(this.props.location.pagesData)
        }
        
    }

    componentDidMount() {
       /* let datafile = JSON.parse(this.props.location.uploadId)
        console.log(datafile)*/
       
    
    }

    

    render() {
        let groups;
        if (typeof this.props.location.groupData !== 'undefined') {
            groups = JSON.parse(this.props.location.groupData)
        }
        
        console.log(this.state.groupData)
        console.log(this.state.adsData)

        let group_data = groups.group_interactions[0].entries

        console.log(group_data)
        return (
            <div className="results1-body">
                <div className="insights">
                    <h2>Here are our insights</h2>

                    <TabContainer groupData = {this.state.groupData} adsData = {this.state.adsData} pagesData = {this.state.pagesData}/>
                    
                </div>
            </div>
        )
    }
}