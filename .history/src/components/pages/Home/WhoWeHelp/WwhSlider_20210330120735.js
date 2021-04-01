import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

export default className CustomSlider extends Component {
    render() {
      const settings =  {
        accessibility: false,
        adaptiveHeight: true,
        arrows: false,
        className: 'WwHCarousel',
        dots: true,
        overScan: 1
      };
      return (
        <div>
          <span>CustomSlider</span>
          <Slider { ...settings }>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }