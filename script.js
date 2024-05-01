//Create a webpage with a 16x16 grid of square divs
const BASECOLORS = ["red", "green", "blue"];

const randomColor = Math.floor(Math.random() * 3 + 1);

const container = document.querySelector(".container");
const controls = document.querySelector(".controls");
let btnReset = document.createElement("button");
btnReset.id = "reset";
controls.appendChild(btnReset);
btnReset.addEventListener("click", (event) => {
  let squares;
  let valid = false;
  squares = parseInt(
    prompt(
      "Please enter a number of squares per side you wish. No more than a 100",
      "16"
    )
  );
  while (!valid) {
    if (isNaN(squares)) {
      squares = prompt("Please input a valid number");
    } else if (parseInt(squares) > 100) {
      squares = prompt("No more than a 100!");
    } else if (parseInt(squares) <= 0) {
      squares = prompt("Why are you the way that you are? More than 0!");
    } else {
      valid = true;
    }
  }
  createGrid(squares);
});

function createGrid(squaresPerSide) {
  container.replaceChildren();
  for (let i = 1; i <= squaresPerSide ** 2; i++) {
    let item = document.createElement("div");
    item.id = `item${i}`;
    item.style.flexBasis = `${100 / squaresPerSide}%`;
    container.appendChild(item);
  }
}

function paint(eventObject) {
  let target = document.getElementById(eventObject.target.id);
  target.style.background = "black";
  if (eventObject.target.style.opacity == "") target.style.opacity = 0.7;
  else target.style.opacity = +eventObject.target.style.opacity + 0.03;
}

createGrid(16);

container.addEventListener("mouseover", paint);
