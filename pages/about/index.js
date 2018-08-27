import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import Flex, { Col } from '../../src/components/Flex';
import {connect} from 'react-redux';
// import cs from './component.css';

class About extends Component {
  render() {
    const list = this.props.list.map((item) => {
      return(
        <Col xs={12} md={4} key={item.id}>
          <Link href="/">
            <p>{item.name}</p>
          </Link>
        </Col>
      )
    });

    return (
      <Layout>
        <Flex>
          {list}
        </Flex>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};


export default connect(mapStateToProps)(About);

