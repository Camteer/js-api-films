import "../pages/index.css";

import {
  getPremiers,
  getGeners, getInfo
} from "../components/api.js";

import { addCard, cardList } from "./card.js";

import { setCloseHandlers } from '../components/modal.js'

import { } from "../components/slider.js"

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


function createPopupCard (id) {
  getInfo(id).then(
    (data)=> {
      const name = data.nameRu;
      const popup = document.querySelector('.popup__content');
      popup.querySelector('.popup__title').textContent = name;
      const popupListInfo = popup.querySelectorAll('.popup__info-list-item-value');
      const popupImage = popup.querySelector('.popup__image').setAttribute('src', data.posterUrl)
      popupListInfo[0].textContent = data.year;
      popupListInfo[1].textContent = data.countries[0].country;
      popupListInfo[2].textContent = data.genres[0].genre;
      popupListInfo[3].textContent = data.slogan;
      popupListInfo[4].textContent = data.description;
      popupListInfo[5].textContent = data.ratingAgeLimits;
      popupListInfo[6].textContent = data.filmLength;
    }
  )
}




/*Promise.all([getPremiers(), getGeners(3), getGeners(4), getGeners(5)]).then(
  ([premiers, crime, drama, detective]) => {
    premiers.items.forEach((element) => {
      cardContainer.premiers.append(addCard(element, createPopupCard));
    });
    crime.items.forEach((element) => {
      cardContainer.crime.append(addCard(element, createPopupCard));
    });
    drama.items.forEach((element) => {
      cardContainer.drama.append(addCard(element, createPopupCard));
    });
    detective.items.forEach((element) => {
      cardContainer.detective.append(addCard(element, createPopupCard));
    });
  }
);*/

setCloseHandlers()

export {};
