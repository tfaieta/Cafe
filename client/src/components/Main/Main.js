import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import SideMenu from '../SideMenu/SideMenu';
import Opening from '../Opening/Opening';
import EpubReader from '../EpubReader/EpubReader';

var textSize = 100;
var maxSize = 220;
var minSize = 50;

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            numPages: null,
            loaded: false,
            accept: '',
            file: '',
            dropzoneActive: false,
            defaultActive: true,
            fill: '#fff',

        }
        this.rendition = null
        this.clickZoom = this.clickZoom.bind(this)
        this.clickShrink = this.clickShrink.bind(this)
    }

    onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages, loaded: true, defaultActive: false });
    }

    onDragEnter() {
        this.setState({
          dropzoneActive: true
        });
    }

    onDragLeave() {
    this.setState({
        dropzoneActive: false
    });
    }

    onDrop(file, rejected) {
    this.setState({
        file: file[0],
        dropzoneActive: false
    });
    }

    applyMimeTypes(event) {
    this.setState({
        accept: event.target.value[0]
    });
    }

    clickZoom() {
      if (textSize <= maxSize){
          var temp0 = textSize+10;
          var temp1 = temp0.toString().concat('%');
          this.rendition.themes.fontSize(temp1);
          textSize += 10;
      }
    }

    clickShrink() {
      if (textSize >= minSize){
          var temp2 = textSize-10;
          var temp3 = temp2.toString().concat('%');
          this.rendition.themes.fontSize(temp3);
          textSize -= 10;
      }
    }



    getRendition = rendition => {
        // Set inital font-size, and add a pointer to rendition for later updates
        this.rendition = rendition
      }

    render() {
        const {accept, dropzoneActive, file, numPages } = this.state;
        const overlayStyle = {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          padding: '2.5em 0',
          background: 'rgba(0,0,0,0.5)',
          textAlign: 'center',
          color: '#fff'
        };
        return (
        <div>
            <Dropzone
            disableClick
            style={{position: "relative"}}
            accept={accept}
            onDrop={this.onDrop.bind(this)}
            onDragEnter={this.onDragEnter.bind(this)}
            onDragLeave={this.onDragLeave.bind(this)}
            >
            { dropzoneActive && <div style={overlayStyle}>Drop files...</div> }
            <SideMenu zoomIn={this.clickZoom} zoomOut={this.clickShrink} />
            {/* {this.state.defaultActive ? <Opening/> : ""} */}
            <EpubReader textMultiplier={this.getRendition}/>
            </Dropzone>
        </div>
        )
    }
}
