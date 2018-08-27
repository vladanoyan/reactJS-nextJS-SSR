import React from 'react';
import PropTypes from 'prop-types';

import { getViewPortConfig, getColumnStyles } from '../../../lib/flex';

class Col extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {},
      viewPortConfig: {},
    };

    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);

    // Initial resize call
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    const { xl, lg, md, sm, xs } = this.props;

    if (!xl && !lg && !md && !sm && !xs) {
      return;
    }

    const viewPortConfig = getViewPortConfig(window.innerWidth, {
      xl,
      lg,
      md,
      sm,
      xs,
    });

    this.setState({
      viewPortConfig,
      style: getColumnStyles(viewPortConfig),
    });
  }

  render() {
    const { viewPortConfig } = this.state;

    const wrapperStyle = {
      paddingLeft: viewPortConfig.left || 0,
      paddingRight: viewPortConfig.right || 0,
      paddingTop: viewPortConfig.top || 0,
      paddingBottom: viewPortConfig.bottom || 0,
    };

    return (
      <div style={this.state.style} className={this.props.className}>
        <div style={wrapperStyle}>{this.props.children}</div>
      </div>
    );
  }
}

const shape = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    size: PropTypes.number,
    offset: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
  }),
]);

Col.propTypes = {
  className: PropTypes.string,
  xl: shape,
  lg: shape,
  md: shape,
  sm: shape,
  xs: shape,
  children: PropTypes.node.isRequired,
};

Col.defaultProps = {
  className: '',
  xl: null,
  lg: null,
  md: null,
  sm: null,
  xs: null,
};

export default Col;
