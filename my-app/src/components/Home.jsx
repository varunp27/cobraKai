import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
export default class NavBar extends Component {
    render() {
      let bar = (
        <div className="home">
            <h1>Being aware about your online behavior
                <br />
                <span id="starts-here">starts here.</span>
                <div id="aware-underline"></div>
                <button className="button"type="button">Get Started</button>
             </h1>
          
        </div>
      );
      return bar;
    }
  }