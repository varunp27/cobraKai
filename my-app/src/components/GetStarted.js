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
                <div id="general-section">
                    <p>Being aware about your online behavior <strong>starts here.</strong></p>
                    <button>
                        <Link to="/Tutorial">Get Started</Link>
                    </button>
                </div>
                <div id="sections">
                    <div id="upload" class="section">
                        <h3>Upload</h3>
                        <button class="section-buttons">
                            <Link to="/upload">Upload</Link>
                        </button>
                    </div>
                    <div id="understand" class="section">
                        <h3>Understand</h3>
                        <button class="section-buttons">
                            <Link to="/">Understand</Link>
                        </button>
                    </div>
                    <div id="evaluate" class="section">
                        <h3>Evaluate</h3>
                        <button class="section-buttons">
                            <Link to="/">Evaluate</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}