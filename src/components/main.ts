import Movie from './Movie'

const movie = new Movie();
const basket = [];

addEventListener('click', () => {
    basket.push(movie.item);
});