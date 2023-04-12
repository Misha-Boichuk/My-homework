import axios from './service';

const continents = {
  fetch: () => axios.get('/continents').then((data) => data),
};

const countries = {
  fetch: (continent) => axios.get(`/${continent}`).then((data) => data),
};

export { continents, countries };
