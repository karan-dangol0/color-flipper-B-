let btn = document.querySelector(".hero-btn");
let color_name = document.querySelector(".color-hex");

let color_characters = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

let random_number;

btn.addEventListener("click", () => {
  document.querySelector("section").style.backgroundColor = colorChange();
  //   document.querySelector('.color-hex').innerText = body_color;
});

let colorChange = function () {
  let body_color = "#";

  for (let i = 1; i <= 6; i++) {
    body_color += color_characters[randomNumber()];
  }

  color_name.innerText = body_color;
  console.log(body_color);

  return body_color;
};

let randomNumber = function () {
  random_number = Math.floor(Math.random() * 14) + 1;
  return random_number;
};


