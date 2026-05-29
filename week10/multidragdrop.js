const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
];

let cardCompositions = "";

const deck = document.querySelector(".deck");
console.log(deck);

for (let i = 0; i < myCards.length; i++) {
  let content = `
      <div class="card-container">
        <div class="card" draggable="true">
          <div class="card-face"><img src="cloud.png" alt="Back" /></div>
          <div class="card-face flip">
            <img src="${myCards[i].src}" alt="${myCards[i].name}" class="card-front" />
          </div>
        </div>
      </div>
    `;
  cardCompositions = cardCompositions + content;
}

console.log(cardCompositions);
deck.innerHTML = cardCompositions;

const cards = document.querySelectorAll(".card");
console.log(cards);
let draggedCard = null;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = cards[i];
    console.log(draggedCard);
  });
}
const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  //let clone = draggedCard;
  let clone = draggedCard;
  dropbox.appendChild(clone);
  clone.addEventListener("click", function () {
    clone.classList.toggle("flip");
  });
  draggedCard = null;
});
