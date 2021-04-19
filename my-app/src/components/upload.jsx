import React, { useState } from "react";

export default function Upload({ children }) {
  const [files, setFiles] = useState("");

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };
  };
  return (
    <body className="upload-body">
      <h2>Upload Files</h2>
      
      <input id="file-upload" type="file" onChange={handleChange} />
      
      
      {"uploaded file content -- " + files}
    </body>
  );
}