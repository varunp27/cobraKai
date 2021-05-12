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

        // let groupState =  JSON.stringify(this.props.location.groupData)
        // let adsState =  JSON.stringify(this.props.location.adsData)
        // let pagesState =  JSON.stringify(this.props.location.pagesData)
        // localStorage.setItem('groupState', groupState);
        // localStorage.setItem('adsState', adsState);
        // localStorage.setItem('adsState', pagesState);
        
        // this.state = {
        //     groupData : JSON.parse(this.props.location.groupData),
        //     adsData : JSON.parse(this.props.location.adsData),
        //     pagesData: JSON.parse(this.props.location.pagesData)
        // }
        
    }

    // componentDidMount() {

    //    let group = JSON.parse(localStorage.getItem('groupData'))
    //    let ads = JSON.parse(localStorage.getItem('adsData'))
    //    let pages = JSON.parse(localStorage.getItem('pagesData'))
    //    this.setState({
    //         groupData : group,
    //         adsData : ads,
    //         pagesData: pages
    //    })



       
    
    // }

    // componentWillUnmount() {
    //     localStorage.setItem('groupData', JSON.stringify(this.state.groupData));
    //     localStorage.setItem('adsData', JSON.stringify(this.state.adsData));
    //     localStorage.setItem('pagesData', JSON.stringify(this.state.pagesData));
    // }

    

    render() {
        // let groups;
        // if (typeof this.props.location.groupData !== 'undefined') {
        //     groups = JSON.parse(this.props.location.groupData)
        // }
        
        // console.log(this.state.groupData)
        // console.log(this.state.adsData)

        // let group_data = groups.group_interactions[0].entries

        // console.log(group_data)
        return (
            <div className="results1-body">
                <div className="insights">
                    <h2>Here are our insights</h2>

                    <TabContainer />
                    
                </div>
            </div>
        )
    }
}