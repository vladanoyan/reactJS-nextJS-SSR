import React, { Component } from 'react';
import {connect} from 'react-redux';
import Layout from '../../src/lib/Layout';
import OwlCarousel from '../../src/components/Owl-corousel';
import CarouselPages from '../../src/components/Owl-corousel-pages';
import cs from './component.css';


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
    const li = this.props.list.map((item)=><li key={item.id}>{item.name}</li>);
    return (
      <Layout>
        <ul>
          {li}
        </ul>
        <div className={cs.home}>
          <OwlCarousel items={this.props.list} toggle={this.state.toggle} animate={this.redirectPage} />
          <div className={cs.content}>
            <div className='fadeIn'>
              <CarouselPages items={this.props.list} position={this.state.position} toggleClick={this.toggleClick} />
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

