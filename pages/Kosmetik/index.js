import React, { Component } from 'react';
import CarouselPages from '../../src/components/Owl-corousel-pages';
import Layout from '../../src/lib/Layout';
import {connect} from "react-redux";


class Kosmetik extends Component {
  render() {
    return (
      <Layout>
        <CarouselPages items={this.props.list} position={3} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};


export default connect(mapStateToProps)(Kosmetik);

