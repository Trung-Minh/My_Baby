const span = document.querySelector("span")
span.innerHTML = '<audio controls loop><source  src="./musicDai.mp3"></audio>'
const title = document.querySelector("p");
const letter = [
    "BABY ",
    "LOVE ",
    "YOU ",
    "SO ",
    "MUCH ",
    "FOREVER ",
    "YOU ",
    "<br><br>",
    "AND ",
    "I ",
    "!!! ",
    "I ",
    "LOVE ",
    "YOU ",
    "OH ",
    "I ",
    "LOVE ",
    "YOU ",
    "SO ",
    "<br><br>",
    "MUCH ",
    "FOREVER ",
    "YOU ",
    "AND ",
    "I"
];

title.textContent = "MY ";
var index = 0;

setInterval(() => {
  title.innerHTML += letter[index];
  index++;
  if (index == letter.length + 1) {
    index = 0;
    title.innerHTML = "MY ";
  }
}, 500);