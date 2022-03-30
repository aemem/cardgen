/* eslint-disable */
import "bootstrap";
import "./style.css";

const diamonds = "♦";
const hearts = "♥";
const spades = "♠";
const clubs = "♣";

const suit = [diamonds, hearts, spades, clubs];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const baraja = [];

//generar baraja
const genBaraja = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let combo = [arr1[i], arr2[j]];
      baraja.push(combo);
    }
  }
  return baraja;
};

//Barajar las cartas
const shuffle = array => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
};

const printCard = array => {
  for (let i = 0; i < array.length; i++) {
    document.querySelector(".cartaTop").innerHTML = document.querySelector(
      ".cartaBottom"
    ).innerHTML = array[i][1];
    document.querySelector(".cartaNum").innerHTML = array[i][0];
  }
};

window.onload = function() {
  //write your code here
  genBaraja(num, suit);
  shuffle(baraja);
  printCard(baraja);
};
