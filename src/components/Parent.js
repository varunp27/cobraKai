import React from 'react';
import Upload from './upload';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
                <header className="App-header">
                        <nav className="navigation">
                            <div className="left-links">
                            <h1 className="navLink"> <Link to ='/'>Aware</Link></h1>
                            </div>
                            <div className="right-links">
                            <Link className="navLink" to ='/aboutus'>About Us </Link>
                            <a className="navLink" href="/" >Get in Touch</a>
                            </div>
                        </nav>
                </header>

            <Route exact path = '/' component={GetStarted}/>
            <Route path = '/upload' component = {UploadFile} />
            <Route path = '/Tutorial' component = {Tutorial}/>
            <Route path = '/results1' component = {Results1}/>
            <Route path = '/aboutus' component = {AboutUs}/>
          </Router>
        )
    }
}