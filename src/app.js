function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCard() {
  const suits = ["spade", "club", "heart", "diamond"];
  const suitSymbols = {
    spade: "♠",
    club: "♣",
    heart: "♥",
    diamond: "♦"
  };
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const randomSuit = suits[getRandomInt(0, 3)];
  const randomValue = values[getRandomInt(0, 12)];

  return {
    suit: randomSuit,
    value: randomValue,
    symbol: suitSymbols[randomSuit]
  };
}

window.onload = function() {
  const cardContainer = document.getElementById("cardContainer");
  const card = generateCard();
  cardContainer.classList.add(card.suit);

  cardContainer.innerHTML = `
      <div class="top">${card.value} ${card.symbol}</div>
      <div class="center">${card.symbol}</div>
      <div class="bottom">${card.value} ${card.symbol}</div>
  `;
};
