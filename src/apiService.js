//let page = 1;
//export default async function fetchImages(input) {
//  const response = await fetch(
//    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${page}&per_page=12&key=20088872-09746933b80002dd45f6f5108`,
//  );
//  const img = response.json();
//  page += 1;
//  return img;
//}

export default class NewApiService {
  constructor() {
    this.input = '';
    this.page = 1;
  }

  fetchArticles() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.input}&page=${this.page}&per_page=12&key=20088872-09746933b80002dd45f6f5108`,
    ).then(response => {
      this.incrementPage();
      return response.json();
    });
    //.then(data => {
    //  this.incrementPage();
    //  return data.images;
    //});
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.input;
  }
  set query(newInput) {
    this.input = newInput;
  }
}
