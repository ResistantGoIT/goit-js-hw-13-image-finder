import './styles.css';
//import fetchImages from './apiService';
import NewApiService from './apiService';
import updateImageMarkup from './updateImageMarkup';
import refs from './refs';

const debounce = require('lodash.debounce');
const newApiService = new NewApiService();
refs.inputImages.addEventListener(
  'input',
  debounce(() => {
    newApiService.query = refs.inputImages.value;
    newApiService.resetPage();
    refs.imagesInfo.innerHTML = ' ';
    newApiService.fetchArticles().then(images => updateImageMarkup(images));
  }, 1000),
);

window.addEventListener('scroll', () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    newApiService.fetchArticles().then(images => updateImageMarkup(images));
  }
});
