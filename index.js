const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(colorsArray) {
  const randomColor = randomIntegerFromInterval(0, colorsArray.length - 1);
  refs.body.style.background = colorsArray[randomColor];
}

refs.startBtn.addEventListener("click", () => {
  refs.startBtn.disabled = true;
  interval = setInterval(() => {
    changeColor(colors);
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
  refs.startBtn.disabled = false;
  clearInterval(interval);
});
