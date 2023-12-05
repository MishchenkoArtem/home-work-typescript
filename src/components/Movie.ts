import Buyable from './Buyable';

export default class Movie {
    item: Buyable;
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

// this.title = title,
// this.year = year,
// this.country = country,
// this.slogan = slogan,
// this.genre = genre,
// this.time = time