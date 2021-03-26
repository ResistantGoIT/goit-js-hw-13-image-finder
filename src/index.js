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
    //newApiService.fetchArticles();
    newApiService.fetchArticles().then(images => updateImageMarkup(images));
    //resetPages();
    //fetchImages(input).then(images => updateImageMarkup(images));

    window.addEventListener('scroll', () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        //fetchImages(input).then(images => updateImageMarkup(images));
        newApiService.fetchArticles().then(images => updateImageMarkup(images));
      }
    });
  }, 1000),
);

//refs.inputImages.addEventListener('input', onSearch);

//function onSearch(e) {
//  e.preventDefault();
//  const input = refs.inputImages.value;
//  refs.imagesInfo.innerHTML = ' ';
//  console.log(input);
//  newApiService.fetchArticles().then(images => updateImageMarkup(images));
//}
