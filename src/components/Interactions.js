import React from "react";
import GroupTreemap from "./GroupTreemap"
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

export default class Interactions extends React.Component {

    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    render() {
        return(
            <div>
                <GroupTreemap className='groupTreemap' ref={this.componentRef} groupData = {this.props.groupData}/>
                <button onClick={() => exportComponentAsJPEG(this.componentRef)}>
                    Export As JPEG
                </button>
            </div>
        )
    }
}
