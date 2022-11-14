export function crEl(tagName, dest, elementClass, text) {
  const el = document.createElement(tagName);
  if (elementClass) el.className = elementClass;
  if (text || text === 0) el.textContent = text;
  dest.append(el);
  // console.log(el);
  return el;
}

const dest = document.getElementById('output');

export function generateUserList(arr) {
  arr.forEach((el) => generateCard(el));
}

/* 
<article>
  <img src="" alt="" class="card__img">
  <h3 class="card__title">title</h3>
  <p class="card__text1"><i>email</i></p>
  <p class="card__text2">id</p>
</article>
*/

function generateCard(obj) {
  const artEl = crEl('article', dest, 'card');
  const imgEl = crEl('img', artEl, 'card__img');
  imgEl.src = obj.avatar;
  imgEl.alt = obj.last_name;
}
