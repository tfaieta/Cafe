import React, { Component } from 'react'
import { Icon } from 'antd';

export default class Opening extends Component {
  render() {
    return (
      <div className="Default">
        <Icon className="logo" type="book" theme="outlined" 
        style={{color: "#7FDBFF"}}/>
        <h1 className="Default__Title">Pubber</h1>
        <p className="Default__subTitle">Proper PDF Reading</p>
      </div>
    )
  }
}
