import { Slider } from './../../components/Slider';
import { PUBLIC_IMAGE_FOLDER } from './../../configs/constants'
import React, { Component }  from 'react';
class BannerDemo extends Component {
// constructor (props) {
//     super(props);
// }
render() {
    const ImagePath = [`${PUBLIC_IMAGE_FOLDER}/cloud.jpg`,`${PUBLIC_IMAGE_FOLDER}/js.jpg`,`${PUBLIC_IMAGE_FOLDER}/dns-server.png`,`${PUBLIC_IMAGE_FOLDER}/load-balancer.png`,`${PUBLIC_IMAGE_FOLDER}/full-stack-web-development.jpg`]
    return (
        <>
        < Slider banners = { ImagePath } random= { false }/>
        </>
    );
}
}
export default BannerDemo;