import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";

export default class Tutorial extends React.Component {
    render() {
        return (
            <div>
                <div className="privacy">
                    <h1>We take it seriously.</h1>
                    <p>We value privacy, so we will not store any of the data you upload.Once you finish reviewing our insights and finish your session, your data will be permanently deleted from our systems. Our intention behind creating this app is solely to educate Facebook users about what data is stored on them and how it is used.</p>
                </div> 
                <main className="tutorial">
                    <h1>Download your data</h1>
                

                </main>
                <div>
                    <button>
                        <Link to="/upload">Next</Link>
                    </button>
                </div>
            </div>
        )
    }
}