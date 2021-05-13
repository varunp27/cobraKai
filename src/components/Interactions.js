import React from "react";
import GroupTreemap from "./GroupTreemap"
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

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

                    <div className='exportDesc'>
                        <p>
                            The treemap above shows proportionally how many times you have interacted 
                            with each of your Facebook groups. Hover over each section to see the exact 
                            number of times you have interacted with each Facebook group!
                        </p>
                        <p>
                            Use the export button below to download an image of the Interactions dashboard. 
                            Please open the downloaded image in order to make sure it downloaded correctly. 
                            If it didnt download correctly, please take a screenshot of the screen to save your insights.
                        </p>
                    </div>
                    <button className='export1' onClick={() => exportComponentAsJPEG(this.componentRef)}>
                        Export As JPEG
                    </button>
                </div>
            </div>
        )
    }
}
