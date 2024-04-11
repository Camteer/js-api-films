const cardList = [
  {
    kinopoiskId: 263531,
    imdbId: "tt0050561",
    nameRu: "Мстители",
    nameEn: "The Avengers",
    nameOriginal: "The Avengers",
    countries: [
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "фантастика",
      },
    ],
    ratingKinopoisk: 7.9,
    ratingImdb: 7.9,
    year: 2012,
    type: "FILM",
    posterUrl:
      "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
  },
  {
    kinopoiskId: 263531,
    imdbId: "tt0050561",
    nameRu: "Мстители",
    nameEn: "The Avengers",
    nameOriginal: "The Avengers",
    countries: [
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "фантастика",
      },
    ],
    ratingKinopoisk: 7.9,
    ratingImdb: 7.9,
    year: 2012,
    type: "FILM",
    posterUrl:
      "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
  },
  {
    kinopoiskId: 263531,
    imdbId: "tt0050561",
    nameRu: "Мстители",
    nameEn: "The Avengers",
    nameOriginal: "The Avengers",
    countries: [
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "фантастика",
      },
    ],
    ratingKinopoisk: 7.9,
    ratingImdb: 7.9,
    year: 2012,
    type: "FILM",
    posterUrl:
      "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
  },
  {
    kinopoiskId: 263531,
    imdbId: "tt0050561",
    nameRu: "Мстители",
    nameEn: "The Avengers",
    nameOriginal: "The Avengers",
    countries: [
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "фантастика",
      },
    ],
    ratingKinopoisk: 7.9,
    ratingImdb: 7.9,
    year: 2012,
    type: "FILM",
    posterUrl:
      "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
  },
];

import { openPopup } from "../components/modal.js";

const key = {
  watchLater: "WATCH_LATER",
  watched: "WATCHED",
};

if (localStorage.getItem(key.watched) === null) {
  localStorage.setItem(key.watched, JSON.stringify([]));
}

if (localStorage.getItem(key.watchLater) === null) {
  localStorage.setItem(key.watchLater, JSON.stringify([]));
}

function addToWatchLater(data) {
  const watchLaterStore = localStorage.getItem(key.watchLater);
  const a = JSON.parse(watchLaterStore);
  const element = {
    id: data.kinopoiskId ? data.kinopoiskId : Number(data.filmId),
    total: data,
  };

  if (
    !a.some((el) => {
      return el.id === element.id;
    })
  ) {
    a.push(element);
  } else {
    const index = a.findIndex((n) => n.id === data.kinopoiskId);
    a.splice(index, 1);
  }
  localStorage.setItem(key.watchLater, JSON.stringify(a));
}

function addToWatched(data) {
  const watchLaterStore = localStorage.getItem(key.watched);
  const a = JSON.parse(watchLaterStore);
  const element = {
    id: data.kinopoiskId ? data.kinopoiskId : Number(data.filmId),
    total: data,
  };
  if (
    !a.some((el) => {
      return el.id === element.id;
    })
  ) {
    a.push(element);
  } else {
    const index = a.findIndex((n) => n.id === data.kinopoiskId);
    a.splice(index, 1);
  }
  localStorage.setItem(key.watched, JSON.stringify(a));
}

function setWatchLater(id, button) {
  const watchLaterStore = localStorage.getItem(key.watchLater);
  const a = JSON.parse(watchLaterStore);

  if (
    a.some((el) => {
      return el.id === id;
    })
  ) {
    button.classList.add("button__green");
  } else {
    button.classList.remove("button__green");
  }
}

function setWatched(id, button) {
  const watchLaterStore = localStorage.getItem(key.watched);
  const a = JSON.parse(watchLaterStore);

  if (
    a.some((el) => {
      return el.id === id;
    })
  ) {
    button.classList.add("button__green");
  } else {
    button.classList.remove("button__green");
  }
}

function setScore(scored, cardElement) {
  const score = parseFloat(scored);
  const scoreSection = cardElement.querySelector(".score");
  if (score >= 8.5) {
    scoreSection.classList.add("score-gold");
    return;
  } else if (score >= 7.0) {
    scoreSection.classList.add("score-green");
    return;
  } else if (score >= 5) {
    scoreSection.classList.add("score-orange");
    return;
  }
  scoreSection.classList.add("score-red");
}

function addCard(data, createPopupCard) {
  const link = data.posterUrlPreview;
  let name;
  if (data.nameRu) {
    name = data.nameRu;
  } else if (data.nameEn) {
    name = data.nameEn;
  } else if (data.nameOriginal) {
    name = data.nameOriginal;
  }

  const score = data.ratingKinopoisk
    ? Number(data.ratingKinopoisk)
    : Number(data.rating);
  const genres = data.genres;
  const id = data.kinopoiskId ? data.kinopoiskId : Number(data.filmId);
  const cardTemplate = document.querySelector("#card__template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  setScore(score, cardElement);
  const cardElementScore = cardElement.querySelector(".score");
  if (score) {
    cardElementScore.textContent = score;
  } else {
    cardElementScore.textContent = "-";
  }
  const cardElementSrc = cardElement.querySelector(".card__image");
  cardElementSrc.setAttribute("src", link);
  const cardElementName = cardElement.querySelector(".card__title");
  cardElementName.textContent = name;
  const cardElementGenres = cardElement.querySelector(".card__genres");
  const buttonWatchLater = cardElement.querySelector(".card__butto_later");
  const buttonWatched = cardElement.querySelector(".card__butto_comlited");
  buttonWatchLater.addEventListener("click", () => {
    console.log(id);
    addToWatchLater(data);
    setWatchLater(id, buttonWatchLater);
  });
  buttonWatched.addEventListener("click", () => {
    addToWatched(data);
    setWatched(id, buttonWatched);
  });
  setWatched(id, buttonWatched);
  setWatchLater(id, buttonWatchLater);
  cardElementSrc.addEventListener("click", () => {
    createPopupCard(id);
    openPopup(document.querySelector(".popup__info"));
  });
  genres.forEach((genges) => {
    cardElementGenres.insertAdjacentHTML(
      "beforeend",
      `<li class="card__genres-item">${
        genges.genre[0].toUpperCase() + genges.genre.slice(1)
      }</li>`
    );
  });
  return cardElement;
}

export { addCard, cardList };
