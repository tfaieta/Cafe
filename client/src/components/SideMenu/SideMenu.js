import React, { Component } from 'react'
import Button from '../Common/Button';
import ColorSwitcher from '../ColorSwitcher/ColorSwitcher';

export default class SideMenu extends Component {

    zoomIn() {

    }



    render() {
        return (
        <div> 
            <header>
            <Button type="zoom-in" onClick={this.zoomIn}/>
            <Button type="zoom-out" onClick={this.zoomOut}/>
            <Button type="book" onClick={this.zoomIn}/>
            <Button type="highlight" onClick={this.zoomIn}/>
            <ColorSwitcher onClick={this.props.onClick}/>
            </header>
        </div>
        )
    }
}
