import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GroupTreemap from './GroupTreemap';
import AdsWordCloud from './AdsWordcloud'
import React from "react";
import Interactions from "./Interactions"


export default class NextSteps extends React.Component {
    render() {
        return(
            <div id='next-steps-body'>
                <h1>Secure Secrets: What can you do next?</h1>
                <h3>
                    If you are uncomfortable with how personalized and targeted ads are on 
                    your social media platforms such as Facebook, here are some things that you can do:
                </h3>
                <p>
                    The best solution is to reduce social media usage, but not everyone wants to do this. 
                </p>
                <p>
                    <strong>Delete your search histories on social media sites regularly. </strong> 
                    Social media platforms collect data like search histories to recommend ads.
                </p>
                <p>
                    <strong>Be intentional of the actions you take while on social media. </strong> 
                    Social media platforms keep track of actions such as likes and comments you take while on their sites.
                    Keeping track of accounts and posts you interact with helps them determine your interests for targeted ads.
                    Think twice before interacting with social media content through likes and comments -- 
                    instead, you could simply just browse through your social media feeds without interacting with posts.
                </p>
                <p>
                    <strong>Limit the amount of personal information you share online. </strong> 
                    Limiting your personal data available to social media platforms and advertising companies
                    helps protect your personal data from being used or viewed by third-party sites without your knowledge.
                </p>
                <p>
                    <strong>Avoid clickbait. </strong> 
                    Clickbait links that can be shown through links or advertisements on your social media feed,
                    even by your friends or popular accounts may give third-party apps opportunities to access and collect
                    your personal data. Be wary of clicking on links, even if the captions sound alluring or exciting.
                </p>
                <h3>Other Resources</h3>
                <p>
                    <li>
                        <a href="https://privacybadger.org/">Privacy Badger</a>: This tool blocks ads and tracks 
                        what companies are tracking you through cookies across different sites
                    </li>
                    <li>
                        <a href="https://justgetmydata.com/">JustGetMyData</a>: This tool links to 
                        where you can download your data files on different online platforms.
                    </li>
                </p>
            </div>
        )
    }
}