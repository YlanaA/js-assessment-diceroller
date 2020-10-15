// console.log("hello");

let dieRollsButton = document.querySelector("#die-rolls");
let showAllRolls = document.querySelector("#show-all-rolls");
let totalBox = document.querySelector("#total-box");
let numberBox = document.querySelector("#number-box");
let allRolls = document.querySelector("#lists");
let rollResults = document.querySelector("#roll-results");
let dieRolls = [];

function ranNums() {
  return Math.floor(Math.random() * 6) + 1;
}

dieRollsButton.addEventListener("click", function () {
  //   console.log("clicked");
  let numberRoll = numberBox.value;
  // console.log(numberRoll);
  // console.log("math is mathin");
  let counter = 0;
  while (counter < numberRoll) {
    dieRolls.push(+ranNums());
    counter++;
  }
  console.log(dieRolls.reduce((a, b) => a + b, 0));
  totalBox.innerHTML = dieRolls.reduce((a, b) => a + b, 0);
});

showAllRolls.addEventListener("click", function () {
  let count = 0;
  while (count < dieRolls.length) {
    allRolls.innerHTML += "<li>" + dieRolls[count] + "</li>";
    count++;
    console.log("loop successful");
    rollResults.innerHTML = "";
  }
});
