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
            <Tab style= {{position: 'inherit'}}>Interactions</Tab>
  
            <Tab style= {{position: 'inherit'}}>Ads</Tab>
          </TabList>
      
          <TabPanel>
            <h2>Your Interactions</h2>

             <Interactions  />
          
        
          </TabPanel>
          
          <TabPanel>
            <h2>Compare Frequent Words in your Ads and Page Likes</h2>
            <AdsWordCloud/>
            <div id="explanation">
              <p>
                The visualizations above use data from your ads interests file, and your liked pages file. 
                Your ads interests file contains a list of topics that Facebook has associated your profile with,
                and the liked pages file stores all the Facebook pages you have liked. We created word clouds of about
                the 100 most common words for each file scaled to size. Hover over words to see if there are
                matches in the other file!
              </p></div>
          </TabPanel>
        </Tabs>
        </div>
        )
    }

}
