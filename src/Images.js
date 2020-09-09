import React from 'react';
import axios from 'axios';
import { Search } from './components/searchbar/Searchbar';
import { ImageGallery } from './components/imageGallery/ImageGallery';
import { Button } from './components/button/Button';
import Spinner from './components/loader/Spinner';

const API_KEY = '17938696-a211d439281abf74b3f685096';

axios.defaults.baseURL = 'https://pixabay.com/api';
class Images extends React.Component {
  state = {
    qwery: '',
    page: 1,
    images: [],
    loading: false,
  };

  getImages = async (qwery, page) => {
    try {
      this.setState({ loading: true });
      await axios
        .get(
          `/?q=${qwery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => this.setState({ images: response.data.hits }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
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

  scroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  newPage = () => {
    this.setState(prev => ({ page: prev.page + 1, loading: true }));
  };
  getQwery = qwery => {
    this.setState({ qwery });
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <Search getQwery={this.getQwery} />
        {loading && <Spinner />}
        <ImageGallery data={images} />
        {images.length > 0 && <Button newPage={this.newPage} />}
      </>
    );
  }
}

export default Images;
