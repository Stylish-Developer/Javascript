let input = document.getElementById("inputText");
let defaultText = document.getElementById("defaultText");
let debounceText = document.getElementById("debounceText");

input.addEventListener("input", (e) => {
  defaultText.innerHTML = e.target.value;
  updatedDebounceFn(e.target.value);
});

const debounce = (cb, deley) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, deley);
  };
};

const updatedDebounceFn = debounce((text) => {
  debounceText.innerHTML = text;
}, 1000);
