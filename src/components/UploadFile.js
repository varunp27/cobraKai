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
            postsData: {},
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
          this.setState({groupData: e.target.result});
          localStorage.setItem('groupState', e.target.result);
        };
      };

      handleChangeAdsData = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          this.setState({adsData: e.target.result});
          localStorage.setItem('adsState', e.target.result);
        };
      };

      handleChangePagesData = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          this.setState({pagesData: e.target.result});
          localStorage.setItem('pagesState', e.target.result);
        };
      };
    
      handleChangePostsData = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          this.setState({postsData: e.target.result});
          localStorage.setItem('postsState', e.target.result);
        //   let ogString = JSON.stringify(e.target.result)
        //   let count = 1;
        // //   while (ogString.length > 5200000) {
        //       let string1 = ogString.substring(0, 5200000);
        //       //let string2 = JSON.stringify(e.target.result).substring(5199999, JSON.stringify(e.target.result).length);
        //       let key = "postsState" + count;
        //       localStorage.setItem(key, string1);
        //       console.log(string1.substring(string1.length - 10, string1.length - 1))
        //      // localStorage.setItem('postsState2', string2);
        //      console.log(ogString)
        //      ogString = ogString.substring(5200000 * count, (5200000 * count) + 5200000);
        //      count++;

        //   }
        //   let finalString = ogString.substring(0, ogString.length);
        //   let finalKey = "postsState" + (count+1);
        //   localStorage.setItem(finalKey, finalString);
        //   localStorage.setItem("count", count)
        
        };
      };

   

    render() {
        return (
            <div id="bootstrap-overrides" className="upload-body">
              <div className="upload">
                <h2>Upload Files</h2>
              </div>
              
              <div className="upload-sections">
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

                <div>
                    <h5>facebook-[your-username] > likes_and_reactions > posts_and_comments.json</h5>
                    <input className="file-upload" id="group" type="file" onChange={this.handleChangePostsData} />
                </div>

                <button className="nxt-btn">
                  <Link to={{ pathname: '/results1' }}>Next</Link>
                </button>
              </div>
            </div>
        );
    }
}