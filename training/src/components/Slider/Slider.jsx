import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { getRandomNumber } from './../../lib/utils/math';
import { getNextRoundRobin } from './../../lib/utils/math';

class Slider extends Component {
    constructor(props) {
        super(props);
        const { altText, banners, defaultBanner, duration, height, random } = props;
        this.altText =  !altText?'Default Banner':altText; 
        this.duration = !duration?2000:duration;
        this.height = !height?200:height;
        this.random = !random?false:random;
        console.log('---------------------------------------props-----------', props, banners);
        this.state = { index: 0};
    }
    
    componentDidMount() {
        console.log('-------------> Component did mount');
        this.time = setInterval(() =>
        {
            console.log("APP render =>>");
            const value = (this.props.random)?getRandomNumber(this.props.banners.length):getNextRoundRobin(this.props.banners.length, this.state.index);
            this.setState({index: value});
        }
        , 3000);
    }
    componentWillMount() {
        clearInterval(this.time);
    }

    // defaultProps = {

    //     altText : 'Default Banner',
    //     defaultBanner: 'default.png',
    //     duration: 2000,
    //     height: 200,
    //     random: false,

    // }
    render() {
        return (
            <>
            <img src={this.props.banners[this.state.index]} alt="ew" height = {this.height} />
            </>
        )
    }

}
export {Slider};