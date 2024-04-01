const cardList = [ 
    {
        "kinopoiskId": 263531,
        "imdbId": "tt0050561",
        "nameRu": "Мстители",
        "nameEn": "The Avengers",
        "nameOriginal": "The Avengers",
        "countries": [
          {
            "country": "США"
          }
        ],
        "genres": [
          {
            "genre": "фантастика"
          }
        ],
        "ratingKinopoisk": 7.9,
        "ratingImdb": 7.9,
        "year": 2012,
        "type": "FILM",
        "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
      },
      {
        "kinopoiskId": 263531,
        "imdbId": "tt0050561",
        "nameRu": "Мстители",
        "nameEn": "The Avengers",
        "nameOriginal": "The Avengers",
        "countries": [
          {
            "country": "США"
          }
        ],
        "genres": [
          {
            "genre": "фантастика"
          }
        ],
        "ratingKinopoisk": 7.9,
        "ratingImdb": 7.9,
        "year": 2012,
        "type": "FILM",
        "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
      },{
        "kinopoiskId": 263531,
        "imdbId": "tt0050561",
        "nameRu": "Мстители",
        "nameEn": "The Avengers",
        "nameOriginal": "The Avengers",
        "countries": [
          {
            "country": "США"
          }
        ],
        "genres": [
          {
            "genre": "фантастика"
          }
        ],
        "ratingKinopoisk": 7.9,
        "ratingImdb": 7.9,
        "year": 2012,
        "type": "FILM",
        "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
      }
      ,{
        "kinopoiskId": 263531,
        "imdbId": "tt0050561",
        "nameRu": "Мстители",
        "nameEn": "The Avengers",
        "nameOriginal": "The Avengers",
        "countries": [
          {
            "country": "США"
          }
        ],
        "genres": [
          {
            "genre": "фантастика"
          }
        ],
        "ratingKinopoisk": 7.9,
        "ratingImdb": 7.9,
        "year": 2012,
        "type": "FILM",
        "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
      }
]

import {openPopup} from '../components/modal.js'


function addCard (data, createPopupCard) {
    const name = data.nameRu;
    const link = data.posterUrlPreview;
    const score = data.ratingKinopoisk;
    const genres = data.genres;
    const id = data.kinopoiskId;
    const cardTemplate = document.querySelector('#card__template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardElementScore = cardElement.querySelector('.score');
    cardElementScore.textContent = score;
    const cardElementSrc = cardElement.querySelector('.card__image');
    cardElementSrc.setAttribute('src', link)
    const cardElementName = cardElement.querySelector('.card__title')
    cardElementName.textContent = name;
    const cardElementGenres = cardElement.querySelector('.card__genres');
    cardElementSrc.addEventListener('mousedown', () =>{
      createPopupCard(id)
      openPopup(document.querySelector('.popup__info'))
    })
    genres.forEach(genges => {
        cardElementGenres.insertAdjacentHTML('beforeend', `<li class="card__genres-item">${genges.genre[0].toUpperCase()+genges.genre.slice(1)}</li>`)
    })
    return cardElement
}

export {addCard, cardList}