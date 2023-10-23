import React, { Component } from 'react';
import './ImageSlider.css';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [ // 이미지 URL 배열
        'https://i.ibb.co/yhZpH21/sample1.png',
        'https://i.ibb.co/T0LjXpy/sample2.png',
      ],
      currentImageIndex: 0,
    };
  }

  nextImage = () => {
    const { currentImageIndex, images } = this.state;
      currentImageIndex = 0;
    if (currentImageIndex < images.length - 1) {
      this.setState({ currentImageIndex: currentImageIndex + 1 });
    }
  }

  previousImage = () => {
    const { currentImageIndex } = this.state;
      currentImageIndex = 1;
    if (currentImageIndex > 0) {
      this.setState({ currentImageIndex: currentImageIndex - 1 });
    }
  }

  render() {
    const { images, currentImageIndex } = this.state;
    const currentImage = images[currentImageIndex];

    return (
    <div className="image-slider">
      <img src={currentImage} alt="Slider" />
      <button className="previous" onClick={this.previousImage}>&lt;</button>
      <button className="next" onClick={this.nextImage}>&t;</button>
    </div>
    );
  }
}

export default ImageSlider;