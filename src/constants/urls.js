const baseURL = 'https://api.themoviedb.org/3';
const basePosterURL = 'https://image.tmdb.org/t/p/w500';
const picture = 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmU4MWYyYjRlYzU3OWNhNWVhNGNjYzlmZDZiZjEwYyIsInN1YiI6IjY0YmY4NjI2OGVlNDljMGZjYWY3Y2NmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Qz7o1zsdySVFlZLTmpqxcwfv632G-tHt802SL-_i_s'

const movies = '/discover/movie';
const genres = '/genre/movie/list';
const movie = '/movie';
const search = `/search/movie`

const urls = {
    movies: {
        base: movies
    },
    genres,
    movie: {
        byId: (id) => `${movie}/${id}`
    },
    search,
    topRated: `${movie}/top_rated`
}

export {
    urls,
    token,
    baseURL,
    basePosterURL,
    picture
}