import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    let bar = (
      <div>
        <nav>
            <h1 id="logo"><a href="/">A<span className="red">Ware</span></a></h1>
            <ul>
              <li id="about us">
                <Link to="/">HOME</Link>
              </li>
              <li id="get in touch">
                <Link to="/others">HEAR FROM OTHERS</Link>
              </li>
              <li id="profile">
                <Link to="/confession">ROAD TO RECOVERY</Link>
              </li>
            </ul>
          </nav>
        </div>
    );
    return bar;
  }
}