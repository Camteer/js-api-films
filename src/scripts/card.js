

function addCard (data) {
    const name = data.nameRu;
    const link = data.posterUrlPreview;
    const score = data.ratingKinopoisk;
    const genres = data.genres;
    const cardTemplate = document.querySelector('#card__template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardElementScore = cardElement.querySelector('.score');
    cardElementScore.textContent = score;
    const cardElementSrc = cardElement.querySelector('.card__image');
    cardElementSrc.setAttribute('src', link)
    const cardElementName = cardElement.querySelector('.card__title')
    cardElementName.textContent = name;
    const cardElementGenres = cardElement.querySelector('.card__genres');
    genres.forEach(genges => {
        cardElementGenres.insertAdjacentHTML('beforeend', `<li class="card__genres-item">${genges.genre[0].toUpperCase()+genges.genre.slice(1)}</li>`)
    })
    return cardElement
}

export {addCard}