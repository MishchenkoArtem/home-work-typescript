import cardFilm from './typeCardFilm';

export default class Movie {
    item: cardFilm;
    constructor ({title, year, country, slogan, genre, time}) {
        this.item = {
            title: title,
            year: year,
            country: country,
            slogan: slogan,
            genre: genre,
            time: time
        }
    }
}
