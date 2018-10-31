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
      }
    }

    onLocationChanged = location => {
      this.setState({
          location
        },
        () => {
          storage && storage.setItem('epub-location', location)
        }
      )
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
              getRendition={this.props.textMultiplier}
            />
          </ReaderContainer>
          </div>
      )
    }
  }
