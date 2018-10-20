import React, { Component } from 'react'
import Button from '../Common/Button';
import ColorSwitcher from '../ColorSwitcher/ColorSwitcher';

export default class SideMenu extends Component {

    zoomIn() {

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
