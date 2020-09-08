import React from 'react';
import axios from 'axios';
import { Search } from './components/searchbar/Searchbar';
import { ImageGallery } from './components/imageGallery/ImageGallery';

const API_KEY = '17938696-a211d439281abf74b3f685096';
axios.defaults.baseURL = 'https://pixabay.com/api';
class Images extends React.Component {
  state = {
    qwery: 'car',
    page: 1,
    images: [],
  };

  getImages = async (qwery = 'car', page = 1) => {
    try {
      await axios
        .get(
          `/?q=${qwery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => this.setState({ images: response.data.hits }));
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getImages();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.qwery !== this.state.qwery) {
      this.getImages(this.state.qwery);
    }
  }
  getQwery = qwery => {
    this.setState({ qwery });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Search getQwery={this.getQwery} />
        <ImageGallery data={images} />
      </>
    );
  }
}

export default Images;
