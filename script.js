const pets = [
  "Dog",
  "Cat",
  "Rabbit",
  "Fish",
  "Bird",
  "Turtle",
  "Hamster",
  "Guinea Pig",
  "Snake",
  "Lizard",
  "Horse",
  "Elephant",
  "Lion",
  "Tiger",
  "Owl",
  "Pikachu",
  "Dinosaur",
  "Dragon"
];

function generate(name) {
  const randomPet = pets[Math.floor(Math.random() * pets.length)];
  const output = document.getElementById("output");
  output.innerText = `${name}, we suggest you get a ${randomPet}!`;
}

function restyle() {
  const output = document.getElementById("output");
  output.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  output.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  output.style.borderColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  output.style.boxShadow = `${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px gray`;
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () => {
  const name = document.getElementById("visitor-name").value;
  generate(name);
});

setInterval(() => {
  restyle();
}, 1500);
