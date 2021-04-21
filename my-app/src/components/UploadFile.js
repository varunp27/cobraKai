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
            data: this.props.dataParentToChild,
            files: "",
            setFiles: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.onTrigger = this.onTrigger.bind(this);
        this.files = this.files;
    }

    handleChange = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          this.setState({files:e.target.result})
          this.setState({setFiles: e.target.result})
        };
      };
    

    onTrigger = (event) => {
        this.props.parentCallback(this.state.files);
        event.preventDefault();
    }

    render() {
        return (
            <body id="bootstrap-overrides" className="upload-body">
            <div className="upload">
                <h2>Upload Files</h2>
                <input id="file-upload" type="file" onChange={this.handleChange} />
                {"uploaded file content -- " + this.state.files}
            </div>
            <div className="next-btn">
                <button onClick= {this.onTrigger}>
                    <Link to="/results1">Next</Link>
                </button>
            </div>
            </body>
        );
    }
}