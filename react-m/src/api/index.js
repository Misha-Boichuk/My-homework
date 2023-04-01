import axios from './service';

const continents = {
    fetch: () => axios.get('/continents').then(data => data), 
}

export { continents };
