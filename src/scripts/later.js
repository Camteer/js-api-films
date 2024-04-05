import "../pages/complited.css";

import {} from "../components/theme.js";

import {} from "../components/header.js";

import { getInfo } from "../components/api.js";

import { setCloseHandlers } from "../components/modal.js";

import { addCard } from "./card.js";

const cardContainer = document.querySelector(".section-complited");

const key = {
  watchLater: "WATCH_LATER",
  watched: "WATCHED",
};

function createPopupCard(id) {
  getInfo(id).then((data) => {
    const name = data.nameRu;
    const popup = document.querySelector(".popup__content");
    popup.querySelector(".popup__title").textContent = name;
    const popupListInfo = popup.querySelectorAll(
      ".popup__info-list-item-value"
    );
    const popupImage = popup
      .querySelector(".popup__image")
      .setAttribute("src", data.posterUrl);
    popupListInfo[0].textContent = data.year;
    popupListInfo[1].textContent = data.countries[0].country;
    popupListInfo[2].textContent = data.genres[0].genre;
    popupListInfo[3].textContent = data.slogan;
    popupListInfo[4].textContent = data.description;
    popupListInfo[5].textContent = data.ratingAgeLimits;
    popupListInfo[6].textContent = data.filmLength;
  });
}

function createCards() {
  const watchLaterStore = localStorage.getItem(key.watchLater);
  const cardsArray = JSON.parse(watchLaterStore);
  cardsArray.forEach((element) => {
    cardContainer.append(addCard(element.total, createPopupCard));
  });
}

createCards();

setCloseHandlers();
