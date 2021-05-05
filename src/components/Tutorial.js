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
            <div id="bootstrap-overrides" className="tutorial-body">
                <div className="privacy">
                    <h1>We take it seriously.</h1>
                    <p>We value privacy, so we will not store any of the data you upload. Once you finish reviewing our insights and finish your session, your data will be permanently deleted from our systems. Our intention behind creating this app is solely to educate Facebook users about what data is stored on them and how it is used.</p>
                </div> 
                <div className="tutorial">
                    <h1>Download your data</h1>
                    <h3>To request a download of your data:</h3>
                    <ol>
                        <li>Login to your Facebook account from your browser.</li>
                        <li>
                            <div>
                                 Click 
                                <img className="_254 img" src="https://static.xx.fbcdn.net/assets/?revision=3913006052065405&amp;name=Comet-FB-Arrow&amp;density=1" alt=""></img>
                                 in the top right of Facebook.
                            </div>
                        </li>
                        <li>Select <strong>Settings & Privacy</strong>, then click <strong>Settings</strong>.</li>
                        <li>In the left column, click <strong>Your Facebook Information</strong>.</li>
                        <li>Next to <strong>Download Your Information</strong>, click <strong>View</strong>.</li>
                        <li>To add or remove categories of data from your request, click the boxes on the right side of Facebook. Be sure to that the following specified categories are selected [categories].</li>
                        <li>Select <strong>JSON</strong>, not HTML, as the format for your download request.</li>
                        <li>Click <strong>Create File</strong> to confirm the download request.</li>
                    </ol>

                    <p>After you've made a download request, it will appear as <strong>Pending</strong> in the <strong>Available Copies</strong> section of the <strong>Download Your Information</strong> tool. <strong>It may take a while</strong> for Facebook to finish preparing your download request.</p>
                    <p>Once Facebook finishes preparing your download request, they'll send a notification letting you know it's ready.</p>

                    <h3>To download a copy of data you requested:</h3>

                    <ol>
                        <li>Go to the <strong>Available Copies</strong> section of the <strong>Download Your Information</strong> tool.</li>
                        <li>Click <strong>Download</strong> and enter your password.</li>
                    </ol>


                </div>
                <div className="next-btn">
                    <button>
                        <Link to="/upload">Next</Link>
                    </button>
                </div>
            </div>
        )
    }
}