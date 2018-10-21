import React, { Component } from 'react'
import Button from '../Common/Button';
import ColorSwitcher from '../ColorSwitcher/ColorSwitcher';

export default class SideMenu extends Component {

    constructor() {
      super()

      this.zoomOut = this.zoomOut.bind(this)
      this.showLibrary = this.showLibrary.bind(this)
      this.highlight = this.highlight.bind(this)
    }

    zoomOut() {

    }

    showLibrary() {

    }

    highlight() {

    }

    render() {
        return (
        <div>
            <header>
            <Button type="zoom-in" onClick={this.props.zoomIn}/>
            <Button type="zoom-out" onClick={this.props.zoomOut}/>
            <Button type="book" onClick={this.showLibrary}/>
            <Button type="highlight" onClick={this.highlight}/>
            <ColorSwitcher/>
            </header>
        </div>
        )
    }
}
