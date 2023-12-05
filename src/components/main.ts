import Movie from './Movie'
import Buyable from './Buyable';

const cardFilm = {
    title: 'Мстители',
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble',
    genre: 'фантастика, боевик, фэнтези, приключения, ...',
    time: '137 мин. / 02:17'
}

const movie = new Movie(cardFilm);

console.log(movie);
