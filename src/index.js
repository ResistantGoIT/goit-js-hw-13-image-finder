import './styles.css';
import debounce from 'lodash.debounce';
import fetchImages from './apiService';
//import NewApiService from './apiService';
import updateImageMarkup from './updateImageMarkup';
import refs from './refs';

//const newApiService = new NewApiService();

refs.inputImages.addEventListener(
  'input',
  debounce(() => {
    const input = refs.inputImages.value;
    refs.imagesInfo.innerHTML = ' ';
    //newApiService.fetchArticles().then(images => updateImageMarkup(images));
    //newApiService.resetPage();
    fetchImages(input).then(images => updateImageMarkup(images));

    window.addEventListener('scroll', () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        fetchImages(input).then(images => updateImageMarkup(images));
        //newApiService.fetchArticles().then(images => updateImageMarkup(images));
      }
    });
  }, 1000),
);
