import Movie from './Movie'
import Cart from './Cart';
import typeCart from './typeCart';

const itemCard = {
    title: 'Мстители',
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble',
    genre: 'фантастика, боевик, фэнтези, приключения, ...',
    time: '137 мин. / 02:17'
}

const movie = new Movie(itemCard);

const item: typeCart = {
    id: 374516,
    name: 'War and Peace',
    price: 300
}

const cart = new Cart();
cart.add(item);