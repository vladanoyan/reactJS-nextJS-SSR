import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './component.css';
import {connect} from "react-redux";

class CategoryNavbar extends Component {

  render() {
    const listMenu = this.props.list.map((item)=>{
      const fontSize = Math.floor((Math.random() * 15) + 10);
      const size = Math.floor((Math.random() * -15) + 10);
      const randomColor=`rgb( ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} )`;
      return(
        <li className="linkMenuLi" key={item.id} style={{transform: `rotate(${size}deg)`}}>
          <Link to="/about" className="linkMenu" style={{color: randomColor, fontSize: fontSize + "px"}}>
            {item.name}
          </Link>
        </li>
      )
    });
    return (
      <div className="categoryNavbar">
        <div className="categoryNavbarLogo">
          <p>LOGO</p>
        </div>
        <div>
          <ul  className="linkMenuUl">
            {listMenu}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(mapStateToProps)(CategoryNavbar);

