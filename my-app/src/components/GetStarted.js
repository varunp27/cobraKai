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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. </p>
                        <button className="section-buttons">
                            <Link to="/upload">Upload</Link>
                        </button>
                    </div>
                    <div id="understand" className="section">
                        <h3>Understand</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna.</p>
                        <button className="section-buttons">
                            <Link to="/">Understand</Link>
                        </button>
                    </div>
                    <div id="evaluate" className="section">
                        <h3>Evaluate</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor at auctor urna.</p>
                        <button className="section-buttons">
                            <Link to="/">Evaluate</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}