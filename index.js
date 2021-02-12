var phrases = {
  happy: ["You go!", "Your smile just cheered me up!", "YAY!"],
  silly: ["Interesting response", "Sounds ... good?", "Me too."],
  sad: ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"]
}

var happyButton = document.querySelector(".happy");
var sillyButton = document.querySelector(".silly");
var cryingButton = document.querySelector(".crying");
var message = document.querySelector(".message");


happyButton.addEventListener("click", getRandomHappy);
sillyButton.addEventListener("click", getRandomSilly);
cryingButton.addEventListener("click", getRandomCrying);

function getRandomHappy() {
  message.innerText = phrases.happy[getRandomIndex(phrases.happy)]
}

function getRandomSilly(){
  message.innerText = phrases.silly[getRandomIndex(phrases.silly)]
}

function getRandomCrying(){
  message.innerText = phrases.sad[getRandomIndex(phrases.sad)]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
