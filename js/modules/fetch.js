export function getData(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((err) => console.warn('error in getData', err));
}
