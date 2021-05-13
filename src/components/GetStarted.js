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
            <div id="bootstrap-overrides" className="getstarted-body">
                <div id="general-section">
                    <p>Being aware about your online behavior <strong>starts here.</strong></p>
                    <button className="start-button">
                        <Link to="/Tutorial">Get Started</Link>
                    </button>
                </div>
                <div id="sections">
                    <div id="upload" className="section">
                        <h3>Upload</h3>
                        <p>Use our Upload feature to upload your raw Facebook data. The data you upload will be stored in a local session and will be permanantly deleted when you close our app.</p>
                        <button className="section-buttons">
                            <Link to="/upload">Upload</Link>
                        </button>
                    </div>
                    <div id="understand" className="section">
                        <h3>Understand</h3>
                        <p>Your raw data will be made into multiple data visualization dashboards. Understand how you use Facebook and what Facebook learns about you.</p>
                        <button className="section-buttons">
                            <Link to="/upload">Understand</Link>
                        </button>
                    </div>
                    <div id="evaluate" className="section">
                        <h3>Evaluate</h3>
                        <p>Evaluate your insights and your behavior using Facebook. Follow our <strong>Secure Secrets</strong> guide to learn how you can be more secure about the data Facebook collects.</p>
                        <button className="section-buttons">
                            <Link to="/">Evaluate</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}