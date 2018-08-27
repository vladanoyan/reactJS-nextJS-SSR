import React, { Component } from 'react';
import {connect} from 'react-redux';
import OwlCarousel from '../Owl-corousel';
import {Animated} from "react-animated-css";
import CarouselPages from '../Owl-corousel-pages';
import './component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTh } from '@fortawesome/free-solid-svg-icons';
library.add(faTh);

class Home extends Component {
  constructor(){
    super();
    this.state={
      Visible: false,
      toggle: true,
      route: '',
      position: '',
    }
  }
  toggleClick=()=>{
    this.setState({ toggle: !this.state.toggle });
  };
  redirectPage=(e, id)=>{
    this.toggleClick();
    this.setState({ Visible: !this.state.Visible });
    this.setState({ route: e , position: id});
    console.log(this.state.position)
  };
  render() {
    return (
      <div className="home">
        <OwlCarousel items={this.props.list} toggle={this.state.toggle} animate={this.redirectPage} />
        <Animated animationIn="fadeIn content" animationOut="content" isVisible={this.state.Visible}>
          <FontAwesomeIcon
            icon="th"
            size='2x'
            className="IconToggle"
            onClick={this.toggleClick}
          />
          <CarouselPages items={this.props.list} position={this.state.position} />
        </Animated>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};


export default connect(mapStateToProps)(Home);

