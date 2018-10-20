import React, { Component } from 'react'
import {ReactReader} from 'react-reader'
import {
    ReaderContainer,
  } from './Helper'

  const storage = global.localStorage || null

  export default class EpubReader extends Component {
    constructor(props) {
      super(props)
      this.state = {
        fullscreen: process.env.NODE_ENV !== 'production',
        location:
          storage && storage.getItem('epub-location')
            ? storage.getItem('epub-location')
            : 2,
        largeText: false
      }
      this.rendition = null
    }
  
    onLocationChanged = location => {
      this.setState(
        {
          location
        },
        () => {
          storage && storage.setItem('epub-location', location)
        }
      )
    }
  
    // Rendition == Text Size Manipulation
    getRendition = rendition => {
      // Set inital font-size, and add a pointer to rendition for later updates
      const { largeText } = this.state
      this.rendition = rendition
      rendition.themes.fontSize(largeText ? '140%' : '100%')
    }
  
    render() {
      const { fullscreen, location } = this.state
      return (
          <div>
          <ReaderContainer fullscreen={fullscreen}>
            <ReactReader
              url={'https://s3-eu-west-1.amazonaws.com/react-reader/alice.epub'}
              locationChanged={this.onLocationChanged}
              title={'Alice in wonderland'}
              location={location}
              getRendition={this.getRendition}
            />
          </ReaderContainer>
          </div>
      )
    }
  }
  
