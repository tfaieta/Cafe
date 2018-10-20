import React, { Component } from 'react'
import Button from '../Common/Button';
import ColorSwitcher from '../ColorSwitcher/ColorSwitcher';

export default class SideMenu extends Component {

    constructor() {
      super()

      this.zoomIn = this.zoomIn.bind(this)
      this.zoomOut = this.zoomOut.bind(this)
      this.showLibrary = this.showLibrary.bind(this)
      this.highlight = this.highlight.bind(this)
    }

    zoomIn() {
            // TODO: Pass props in and zoom in
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
            <Button type="zoom-in" onClick={this.zoomIn}/>
            <Button type="zoom-out" onClick={this.zoomOut}/>
            <Button type="book" onClick={this.showLibrary}/>
            <Button type="highlight" onClick={this.highlight}/>
            <ColorSwitcher/>
            </header>
        </div>
        )
    }
}
