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
            files: "",
            setFiles: ""

        }
       // this.handleChange = this.handleChange.bind(this);
    }

    handleChangeGroupData = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          this.setState({groupData: e.target.result})
        };
      };
    

   

    render() {
        return (
            <body id="bootstrap-overrides" className="upload-body">
            <div className="upload">
                <h2>Upload Files</h2>
            </div>
            <div>
                <h5>facebook-[your-username] > interactions > groups.json</h5>
                <input className="file-upload" id="group" type="file" onChange={this.handleChangeGroupData} />
            </div>
            <div className="next-btn">
                <button>
                <Link to={{ pathname: '/results1', uploadId: this.state.groupData }}>Next</Link>
                </button>
            </div>
            </body>
        );
    }
}