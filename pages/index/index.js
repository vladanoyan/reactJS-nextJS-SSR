import React, { Component } from 'react';
import {connect} from 'react-redux';
import Layout from '../../src/components/Layout';
import CarouselPagesCss from '../../src/components/Owl-corousel-pages/Coarousel-pages.js'
import Carousel from '../../src/components/Owl-corousel/Coarousel.js';
import OwlCarousel from '../../src/components/Owl-corousel';
import CarouselPages from '../../src/components/Owl-corousel-pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import cs from './component.css';

library.add(faTh);

class Home extends Component {
  constructor() {
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
  };

  render() {
    return (
      <Layout>
        <h1 className={cs.hayk}>asjhdajshdjaksxxxxx</h1>
        <div className={cs.home}>
          <Carousel>
            <OwlCarousel items={this.props.list} toggle={this.state.toggle} animate={this.redirectPage} />
          </Carousel>
          <div className={cs.content}>
            <div className='fadeIn'>
              <FontAwesomeIcon
                icon="th"
                size='2x'
                className={cs.IconToggle}
                onClick={this.toggleClick}
              />
              <CarouselPagesCss>
                <CarouselPages items={this.props.list} position={this.state.position} />
              </CarouselPagesCss>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};


export default connect(mapStateToProps)(Home);

