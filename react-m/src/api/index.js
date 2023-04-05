import axios from './service';

const continents = {
    fetch: () => axios.get('/continents').then(data => data),
}

const countries = {
    fetch: () => axios.get('/countries').then(data => data),
}

export { continents, countries };
