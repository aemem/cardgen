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
      const numero = arr1[i];
      const simbolo = arr2[j];
      baraja.push({ numero, simbolo });
    }
  }
  return baraja;
};

//generar carta
const genCard = baraja => {
  const random = Math.floor(Math.random() * baraja.length);
  const genNum = baraja[random].numero;
  const genSuit = baraja[random].simbolo;
  document.querySelector(".cartaNum").innerHTML = genNum;
  document.querySelector(".cartaTop").innerHTML = document.querySelector(
    ".cartaBottom"
  ).innerHTML = genSuit;
};

//boton random
cartaRandom.addEventListener("click", randomClick);

const randomClick = baraja => {
  const random = Math.floor(Math.random() * baraja.length);
  const genNum = baraja[random].numero;
  const genSuit = baraja[random].simbolo;
  document.querySelector(".cartaNum").innerHTML = genNum;
  document.querySelector(".cartaTop").innerHTML = document.querySelector(
    ".cartaBottom"
  ).innerHTML = genSuit;
};

//boton reset
reset.addEventListener("click", resetBaraja);

const resetBaraja = baraja => {};

window.onload = function() {
  //write your code here
  genBaraja(num, suit);
  genCard(baraja);
};
