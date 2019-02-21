import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DEFAULT_BANNER_IMAGE } from '../../configs/constants';
import { getRandomNumber, getNextRoundRobin } from '../../lib/utils/math';
import style from './style';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentWillMount() {
    clearInterval(this.time);
  }

  componentDidMount() {
    const that = this;
    const { random, banners, duration } = this.props;
    this.time = setInterval(() => {
      const { index } = that.state;
      const value = (random)
        ? getRandomNumber(banners.length)
        : getNextRoundRobin(banners.length, index);
      this.setState({ index: value });
    },
    duration);
  }

  render() {
    const defaultBanner = `${DEFAULT_BANNER_IMAGE}`;
    const { banners, height, altText } = this.props;
    const { index } = this.state;
    if (banners && banners.length) {
      return (
        <>
          <img src={banners[index]} alt="ew" height={height} style={style.design} />
        </>
      );
    }
    return (
      <>
        <img src={defaultBanner} alt={altText} height={height} style={style.design} />
      </>
    );
  }
}

Slider.propTypes = {
  altText: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
  banners: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Slider.defaultProps = {
  altText: 'Default Banner',
  duration: 2000,
  height: 200,
  random: false,
};

export { Slider };
