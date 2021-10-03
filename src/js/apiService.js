export default function fetchImages(query) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=5&key=23676314-92d729b6642f8dfd3ee72d5a9`,
  ).then(response => {
    return response.json().then(console.log);
  });
}
