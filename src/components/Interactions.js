import React from "react";
import GroupTreemap from "./GroupTreemap"
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import LikesBarchart from "./LikesBarchart";

export default class Interactions extends React.Component {

    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    exportWrap() {

    }

    render() {
        return(
            <div>
                <div className='export' ref={this.componentRef}>
                    <GroupTreemap className='groupTreemap' />

                    <LikesBarchart />

                    <div classname='exportDesc'>
                        <p>Use the export button to download an image of the Interactions dashboard. Please open the downloaded image in order to make sure it downloaded correctly. If it didnt download correctly, please take a screenshot of the screen to save your insights.</p>
                    </div>
                    <button className='export1' onClick={() => exportComponentAsJPEG(this.componentRef)}>
                        Export As JPEG
                    </button>
                </div>
            </div>
        )
    }
}
