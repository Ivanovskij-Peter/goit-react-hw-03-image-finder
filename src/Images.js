import React from 'react';
import axios from 'axios';
import { Search } from './components/searchbar/Searchbar';
import { ImageGallery } from './components/imageGallery/ImageGallery';
import { Button } from './components/button/Button';
import Spinner from './components/loader/Spinner';
import style from './components/App.module.css';

const API_KEY = '17938696-a211d439281abf74b3f685096';

axios.defaults.baseURL = 'https://pixabay.com/api';
class Images extends React.Component {
  state = {
    qwery: '',
    page: 1,
    images: [],
    loading: false,
  };

  getImages = async () => {
    try {
      this.setState({ loading: true });
      await axios
        .get(
          `/?q=${this.state.qwery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => {
          this.setState(prevState => ({
            images: [...prevState.images, ...response.data.hits],
            loading: false,
            page: prevState.page + 1,
          }));
        });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.qwery !== this.state.qwery) {
      this.getImages(this.state.qwery);
    }
  }

  getQwery = qwery => {
    this.setState({ qwery, images: [], page: 1 });
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <Search getQwery={this.getQwery} />
        <ImageGallery data={images} />
        <div className={style.LoaderDiv}>{loading && <Spinner />}</div>
        <div className={style.ButtonFather}>
          {images.length > 0 && !loading && <Button newPage={this.getImages} />}
        </div>
      </>
    );
  }
}

export default Images;
