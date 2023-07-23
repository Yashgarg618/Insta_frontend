import React, { Component } from 'react';
import "./StatusBar.css";
import { Avatar } from '@material-ui/core';
import statusimg from "../../images/profilephoto.jpg";
import statusimg1 from "../../images/pp1.png";
import statusimg2 from "../../images/pp2.png";
import statusimg3 from "../../images/pp3.jpeg";
import statusimg4 from "../../images/pp4.jpeg";
class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='statusbar__container'>
          <div className='status'>
            <Avatar className='statusbar__status' src={statusimg} />
            <div className="statusbar__text">Yash</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg1} />
            <div className="statusbar__text">Khushi</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg2} />
            <div className="statusbar__text">Yashvi</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg3} />
            <div className="statusbar__text">Varnit</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg4} />
            <div className="statusbar__text">Lakshit</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg2} />
            <div className="statusbar__text">Manya</div>
          </div>
          <div className="status">
            <Avatar className="statusbar__status" src={statusimg1} />
            <div className="statusbar__text">Keshav</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusBar;
