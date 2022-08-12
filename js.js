$(document).ready(function () {
  $("#modal1").modal("show");
});

let cards = new Array();
cards = document.querySelectorAll(".front");
console.log(cards);
let clickCount = 0;
let firstIcon;
let secondIcon;
let elem1;
let elem2;
let child1;
let child2;
let countMatches = 0;

function displayIcon() {
  if (clickCount === 0) {
    elem1 = this;
    this.children[0].style = "display:block;";
    child1 = this.children[0];
    console.log(this.parentNode.dataset.icon);
    firstIcon = this.parentNode.dataset.icon;
    clickCount++;
    elem1.removeEventListener("click", displayIcon);
  } else if (clickCount === 1) {
    elem2 = this;
    this.children[0].style = "display:block;";
    child2 = this.children[0];
    console.log(this.parentNode.dataset.icon);
    clickCount++;
    secondIcon = this.parentNode.dataset.icon;
    checkForMatch();
  }
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", displayIcon);
  const mixCards = Math.floor(Math.random() * cards.length);
  console.log(mixCards);
  cards[i].parentNode.style.order = mixCards;
}

function checkForMatch() {
  if (firstIcon == secondIcon) {
    elem1.removeEventListener("click", displayIcon);
    elem2.removeEventListener("click", displayIcon);
    clickCount = 0;
    countMatches++;
    if (countMatches === 8) {
      document.getElementById("nono").innerText =
        " !CONGRATULATIONS! You found all matches in: " + mins + " : " + secs;
      $(document).ready(function () {
        $("#exampleModal").modal("show");
      });
    }
  } else {
    setTimeout(() => {
      elem1.addEventListener("click", displayIcon);
      child1.style = "display:none;";
      child2.style = "display:none;";
      clickCount = 0;
    }, 1000);
  }
}

function newGame() {
  location.reload();
}

let secs = 1;
let mins = 0;
function start() {
  setInterval(function () {
    if (secs < 10) {
      document.getElementById("secs").innerText = "0" + secs;
    } else if (secs < 60) {
      document.getElementById("secs").innerText = secs;
    } else if (secs == 60) {
      secs = 0;
      document.getElementById("secs").innerText = "0" + secs;
      if (mins < 10) {
        document.getElementById("mins").innerText = "0" + mins;
      } else if (mins < 60) {
        document.getElementById("mins").innerText = mins;
      } else if (mins == 60) {
        $(document).ready(function () {
          $("#modal3").modal("show");
        });
      }
      mins = 1;
      mins++;
    }
    secs++;
  }, 1000);
}
