import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GroupTreemap from './GroupTreemap';
import AdsWordCloud from './AdsWordcloud'
import React from "react";
import Interactions from "./Interactions"


export default class TabContainer extends React.Component {

    render() {



      let groupState = JSON.parse(localStorage.getItem('groupState'));
      let adsState = JSON.parse(localStorage.getItem('adsState'));
      let pagesState = JSON.parse(localStorage.getItem('pagesState'));
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

             <Interactions  />
          
        
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Compare Frequent Words in your Ads and Page Likes</h2>
            <AdsWordCloud/>
            <div id="explanation"><h3>What does this mean?</h3><p>swag</p></div>
          </TabPanel>
        </Tabs>
        </div>
        )
    }

}
