import React from 'react';
import Upload from './upload';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Tutorial from './Tutorial';
import Results1 from './Results1';
import GetStarted from './GetStarted';
import UploadFile from './UploadFile';
import AboutUs from "./AboutUs";


export default class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    handleCallback = (childData) =>{
        this.setState({data: childData})
    }

    render(){
        const {data} = this.state;
        return(
            <Router basename ={process.env.PUBLIC_URL}>
            <Route exact path = '/cobraKai' component={GetStarted}/>
            <Route path = '/cobraKai/upload' component = {UploadFile} />
            <Route path = '/cobraKai/tutorial' component = {Tutorial}/>
            <Route path = '/cobraKai/results1' component = {Results1}/>
            <Route path = '/cobraKai/aboutus' component = {AboutUs}/>
          </Router>
        )
    }
}