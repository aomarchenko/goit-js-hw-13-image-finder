// export default function fetchImages(searchQuery) {
//   return fetch(
//     `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=5&key=23676314-92d729b6642f8dfd3ee72d5a9`,
//   ).then(response => {
//     return response.json().then(console.log);
//   });
// }

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchImages(searchQuery) {
    console.log(this);
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=5&key=23676314-92d729b6642f8dfd3ee72d5a9`,
    ).then(response => {
      return response.json().then(data => {
        this.page += 1;
        console.log(data);
        return data.this;
      });
    });
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  resetPage() {
    this.page = 1;
  }
}
