import "../pages/index.css";

import {
  getPremiers,
  getGeners
} from "../components/api.js";

import { addCard } from "./card.js";

const cardContainer = {
  premiers: document.querySelector(".premiers").querySelector(".content__list"),
  detective: document
    .querySelector(".detective")
    .querySelector(".content__list"),
  crime: document.querySelector(".crime").querySelector(".content__list"),
  horror: document.querySelector(".horror").querySelector(".content__list"),
  drama: document.querySelector(".drama").querySelector(".content__list"),
  comedy: document.querySelector(".comedy").querySelector(".content__list"),
  serials: document.querySelector(".serials").querySelector(".content__list"),
  anime: document.querySelector(".anime").querySelector(".content__list"),
  trilogy: document.querySelector(".trilogy").querySelector(".content__list"),
};



Promise.all([getPremiers(), getGeners(3), getGeners(4), getGeners(5)]).then(
  ([premiers, crime, drama, detective]) => {
    premiers.items.forEach((element) => {
      cardContainer.premiers.append(addCard(element));
    });
    crime.items.forEach((element) => {
      cardContainer.crime.append(addCard(element));
    });
    drama.items.forEach((element) => {
      cardContainer.drama.append(addCard(element));
    });
    detective.items.forEach((element) => {
      cardContainer.detective.append(addCard(element));
    });
  }
);

export {};
