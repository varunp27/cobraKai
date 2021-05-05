import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";
import FooterPage from './Footer'

export default function Upload() {




  const [files, setFiles] = useState(JSON);

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };
  };

  /*const onTrigger = (event) => {
    this.props.parentCallback("Data from child");
    event.preventDefault();
  }*/

  return (
    <div>
    <body id="bootstrap-overrides" className="upload-body">
      <div className="upload">
        <h2>Upload Files</h2>
        <input id="file-upload" type="file" onChange={handleChange} />
        {"uploaded file content -- " + files}
      </div>
      <div className="next-btn">
        <button>
            <Link to={{ pathname: '/results1', uploadId: files }}>Next</Link>
        </button>
      </div>
    </body>
    </div>
  );
}