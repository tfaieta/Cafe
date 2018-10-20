import React, { Component } from 'react'
import { Icon } from 'antd';


export default class ColorSwitcher extends Component {
  render() {
    return (
    <div style={{justifyContent: "center", alignItems: "center",  marginTop: 35}}>
        <button onClick={this.props.onClick}> 
            <div>
                <Icon 
                type="bg-colors"
                style={{ fontSize: '25px', color: '#F4ECD8'}}>
                </Icon>
            </div>
        </button>
    </div>
    )
  }
}