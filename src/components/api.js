// https://kinopoiskapiunofficial.tech/documentation/api/#/films/get_api_v2_2_films_filters

function getPremiers() {
  return fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections",
    {
      method: "GET",
      headers: {
        "X-API-KEY": "95387974-0aef-471b-a1d2-00457eb43123",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
}

function getGeners(num) {
  return fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${num}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "95387974-0aef-471b-a1d2-00457eb43123",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
}

function getInfo(id) {
  return fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "95387974-0aef-471b-a1d2-00457eb43123",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
}

export { getPremiers, getGeners, getInfo };
