import React, { Component } from 'react';
import "./About.css";
import zhongliii from "../assets/zhongliii.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={zhongliii}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Your Name</div>
        <div className="brief_description">
          Hello! My name is Lena Munad, and I'm a Computer Science at LPC. 
        </div>
      </div>
    </div>
  </div>

      </div>
    )
  }
}