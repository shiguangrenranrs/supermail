export function debounce(f, ms) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => f.apply(this, arguments), ms);
  };
}