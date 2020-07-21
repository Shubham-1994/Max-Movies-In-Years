const maxMovie = require('./max-movies-in-years');
const movieData = require('./service');

const data = movieData();
const yearsList = maxMovie(data.Movieslist).yearListOfMaxMovies;

console.log(yearsList);