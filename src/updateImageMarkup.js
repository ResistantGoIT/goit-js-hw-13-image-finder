import template from './template/images.hbs';
import refs from './refs';

export default function updateImageMarkup(images) {
  const markup = template(images);
  refs.imagesInfo.insertAdjacentHTML('beforeend', markup);
}
