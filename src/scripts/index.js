import "../pages/index.css";

import { getPremiers, getGeners, getInfo } from "../components/api.js";

import {} from "../components/header.js";

import { addCard, cardList } from "./card.js";

import { setCloseHandlers } from "../components/modal.js";

import {} from "../components/theme.js";

import { sliderStep } from "../components/slider.js";

const sectionOfType = document.querySelectorAll(".section");
const cardContainer = {
  premiers: document.querySelector(".premiers").querySelector(".content__list"),
  detective: document
    .querySelector(".detective")
    .querySelector(".content__list"), // 5
  crime: document.querySelector(".crime").querySelector(".content__list"), //3
  horror: document.querySelector(".horror").querySelector(".content__list"), //17
  drama: document.querySelector(".drama").querySelector(".content__list"), // 4
  comedy: document.querySelector(".comedy").querySelector(".content__list"), // 13
  serials: document.querySelector(".serials").querySelector(".content__list"), // 14
  anime: document.querySelector(".anime").querySelector(".content__list"), // 24
  trilogy: document.querySelector(".trilogy").querySelector(".content__list"), // 12
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

/*cardList.forEach((element) => {
  cardContainer.premiers.append(addCard(element, createPopupCard))
});

cardList.forEach((element) => {
  cardContainer.premiers.append(addCard(element, createPopupCard))
});
cardList.forEach((element) => {
  cardContainer.premiers.append(addCard(element, createPopupCard))
});
cardList.forEach((element) => {
  cardContainer.premiers.append(addCard(element, createPopupCard))
});

cardList.forEach((element) => {
  cardContainer.premiers.append(addCard(element, createPopupCard))
});

cardList.forEach((element) => {
  cardContainer.premiers.append(addCard(element, createPopupCard))
});
cardList.forEach((element) => {
  cardContainer.premiers.append(addCard(element, createPopupCard))
});
cardList.forEach((element) => {
  cardContainer.premiers.append(addCard(element, createPopupCard))
});
*/

Promise.all([
  getPremiers(),
  getGeners(3),
  getGeners(4),
  getGeners(5),
  getGeners(17),
  getGeners(13),
  getGeners(14),
  getGeners(24),
  getGeners(12),
])
  .then(
    ([
      premiers,
      crime,
      drama,
      detective,
      horror,
      comedy,
      serials,
      anime,
      trilogy,
    ]) => {
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
      horror.items.forEach((element) => {
        cardContainer.horror.append(addCard(element, createPopupCard));
      });
      comedy.items.forEach((element) => {
        cardContainer.comedy.append(addCard(element, createPopupCard));
      });
      serials.items.forEach((element) => {
        cardContainer.serials.append(addCard(element, createPopupCard));
      });
      comedy.items.forEach((element) => {
        cardContainer.comedy.append(addCard(element, createPopupCard));
      });
      anime.items.forEach((element) => {
        cardContainer.anime.append(addCard(element, createPopupCard));
      });
      trilogy.items.forEach((element) => {
        cardContainer.trilogy.append(addCard(element, createPopupCard));
      });
    }
  )
  .then(() => {
    sectionOfType.forEach((section) => {
      const buttonNext = section.querySelector(".button__slider-next");
      const buttonBefore = section.querySelector(".button__slider-before");
      const contentList = section.querySelector(".content__list");
      const count = contentList.childElementCount * 310;
      let xOfset = 0;
      buttonBefore.addEventListener("click", (evt) => {
        xOfset = sliderStep(evt, contentList, count, xOfset);
      });
      buttonNext.addEventListener("click", (evt) => {
        xOfset = sliderStep(evt, contentList, count, xOfset);
      });
    });
  });

setCloseHandlers();

export {};
