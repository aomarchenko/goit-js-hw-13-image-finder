import './sass/main.scss';
import ApiService from './js/apiService';
import imageCardTemplate from './templates/image-card-template.hbs';

const refs = {
  searchForm: document.querySelector('.input-form'),
  loadMoreButton: document.querySelector('.load-more-button'),
  imageContainer: document.querySelector('.image-container'),
};
const element = refs.imageContainer;

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreButton.addEventListener('click', onLoadMore);

const apiService = new ApiService();

function onSearch(e) {
  e.preventDefault();
  clearImageContainer();
  apiService.query = e.currentTarget.elements.query.value;
  apiService.resetPage();
  apiService.fetchImages().then(appendImageGridMarkup);

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
function onLoadMore() {
  apiService.fetchImages().then(appendImageGridMarkup);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
function appendImageGridMarkup(data) {
  console.log(data);
  refs.imageContainer.insertAdjacentHTML('beforeend', imageCardTemplate(data));
}
function clearImageContainer() {
  refs.imageContainer.innerHTML = '';
}
