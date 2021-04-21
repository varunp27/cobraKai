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
            <body id="bootstrap-overrides" className="tutorial-body">
                <div className="privacy">
                    <h1>We take it seriously.</h1>
                    <p>We value privacy, so we will not store any of the data you upload. Once you finish reviewing our insights and finish your session, your data will be permanently deleted from our systems. Our intention behind creating this app is solely to educate Facebook users about what data is stored on them and how it is used.</p>
                </div> 
                <div className="tutorial">
                    <h1>Download your data</h1>
                    <h3>Get Started</h3>
                    <ul>
                        <li>Go to <a href="https://www.facebook.com/help/212802592074644" target="_blank" rel="noopener noreferrer">this link</a> and download your data from Facebook following the instructions. This may take a while! Facebook will send you an email once it’s done compiling your data.</li>
                        <li>Select to download your data in JSON format.</li>
                        <li>Once you get the file via email click it to download it to your computer.</li>
                        <li>Upload the specified files using the upload button on the next page.</li>
                    </ul>


                </div>
                <div className="next-btn">
                    <button>
                        <Link to="/upload">Next</Link>
                    </button>
                </div>
            </body>
        )
    }
}