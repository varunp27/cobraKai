import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";

export default class UploadFile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            groupData: {},
            adsData: {},
            pagesData: {},
            files: "",
            setFiles: ""

        }
        this.handleChangeGroupData = this.handleChangeGroupData.bind(this);
    }

    handleChangeGroupData = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          this.setState({groupData: e.target.result})
        };
      };

      handleChangeAdsData = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          this.setState({adsData: e.target.result})
        };
      };

      handleChangePagesData = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          this.setState({pagesData: e.target.result})
        };
      };
    

   

    render() {
        return (
            <div id="bootstrap-overrides" className="upload-body">
            <div className="upload">
                <h2>Upload Files</h2>
            </div>
            <div>
                <h5>facebook-[your-username] > interactions > groups.json</h5>
                <input className="file-upload" id="group" type="file" onChange={this.handleChangeGroupData} />
            </div>

            <div>
                <h5>facebook-[your-username] > ads_and_businesses > ads_interest.json</h5>
                <input className="file-upload" id="group" type="file" onChange={this.handleChangeAdsData} />
            </div>

            <div>
                <h5>facebook-[your-username] > likes_and_reactions > pages.json</h5>
                <input className="file-upload" id="group" type="file" onChange={this.handleChangePagesData} />
            </div>

            <div className="next-btn">
                <button>
                <Link to={{ pathname: '/results1', groupData: this.state.groupData, adsData: this.state.adsData, pagesData: this.state.pagesData }}>Next</Link>
                </button>
            </div>
            </div>
        );
    }
}