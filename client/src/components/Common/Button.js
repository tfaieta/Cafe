import React, { Component } from 'react'
import { Icon } from 'antd';

export default class Button extends Component {
  render() {
    return (
      <div style={{justifyContent: "center", alignItems: "center",  marginTop: 35}}>
        <button onClick={this.props.onClick}> 
            <div>
                <Icon 
                type={this.props.type}
                style={{ fontSize: '25px', color: '#7FDBFF'}}>
                </Icon>
            </div>
        </button>
      </div>
    )
  }
}
