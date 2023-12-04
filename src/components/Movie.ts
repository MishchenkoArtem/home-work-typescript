export default class Movie {
    item: { 
        title: string; 
        year: number;
        country: string;
        slogan: string;
        genre: string;
        time: string; 
    };
    
    constructor () {
        this.item = {
            title: 'Мстители',
            year: 2012,
            country: 'США',
            slogan: 'Avengers Assemble',
            genre: 'фантастика, боевик, фэнтази, приключения, ...',
            time: '137 мин / 02:17'
        }
    }
}