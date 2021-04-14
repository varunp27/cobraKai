import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";

export default class GetStarted extends React.Component {
    
    render() {
        return (
            <div>
                <button>
                    <Link to="/tutorial">Get Started</Link>
                </button>
                <p> swag </p>

            </div>
        )
    }
}