import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GroupTreemap from './GroupTreemap';
import AdsWordCloud from './AdsWordcloud'
import React from "react";
import Interactions from "./Interactions"


export default class TabContainer extends React.Component {

    render() {
      console.log(this.props.adsData)
      console.log(this.props.pagesData)
        return (
          <div className="tabs-body">
          <Tabs>
          <TabList>
            <Tab>Interactions</Tab>
            <Tab>Usage</Tab>
            <Tab>Ads</Tab>
          </TabList>
      
          <TabPanel>
            <h2>Your Interactions</h2>

             <Interactions groupData = {this.props.groupData} />
          
        
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Compare Frequent Words in your Ads and Page Likes</h2>
            <AdsWordCloud adsData = {this.props.adsData} pagesData = {this.props.pagesData} />
          </TabPanel>
        </Tabs>
        </div>
        )
    }

}
