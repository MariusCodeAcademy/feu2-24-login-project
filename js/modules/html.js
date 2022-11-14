export function crEl(tagName, dest, className, text) {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  if (text || text === 0) el.textContent = text;
  dest.append(el);
  // console.log(el);
  return el;
}
