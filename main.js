  //Module pattern
  const movieDatabase = (() => {
  let movies = [
    {
      title: 'Léon: The Professional',
      year:1994,
      genres: ['Crime','Drama','Thriller'],
      ratings: [1,2,3,4,5,6,7,8,9,10]
    },
    {
      title: 'The Usual Suspects',
      year: 1995,
      genres: ['Crime','Drama','Mystery'],
      ratings: [1,2,3,4,5,6,7,8,9,10]
    },
    {
      title:'Fight Club',
      year:1999,
      genres:['Action','Thriller','Drama'],
      ratings:[1,2,3,4,5,6,7,8,9,10]
    },
    {
      title:'V for Vendetta',
      year:2005,
      genres:['Action','Drama','Thriller'],
      ratings:[1,2,3,4,5,6,7,8,9,10]

    },
    {
      title:'Pulp Fiction',
      year:1994,
      genres:['Crime','Drama'],
      ratings:[1,2,3,4,5,6,7,8,9,10]
    },
    {
      title:'The Dark Knight',
      year:2008,
      genres:['Action','Crime','Drama'],
      ratings:[1,2,3,4,5,6,7,8,9,10]
    }
  ];

  return {
    // Movie constructor
    movie: function(title, year, genres, ratings){
    this.title = title;
    this.year = year;
    this.genres = genres.split(' ');
    this.ratings = [ratings];
 },
 	//Arrow function to return the value to the array
 	getMovie:() => { return movies;}
    // Add new movies with push
    addMovie:() => {movies.push(movie);
 },
 	// Adds movie based on input from user
 	userInputForm:() => {
 		var addTitle = document.getElementById("title").value;
 		var addYear = document.getElementById("year").value;
 		var addGeners = document.getElementById("genres").value;
 		var addRatings = document.getElementById("ratings").value;

 		var inputMovie = new movieDatabase.movie(addTitle,addYear,addGenres,addRatings);
 		movieDatabase.addMovie(userInputForm);
 		movieDatabase.movieHtmlForm();
 		console.log(movies);

 	},
 	//This code lits all movies from the array.
 	movieHtmlForm: () => {
 		var movieDiv = document.getElementsByClassName('movieDiv')[0];
 		var movieBlock = "";
 		for (let i = 0; i < movies.length; i++) {

 			var movieBlock = `<div class="movieDiv">
 			<p>Title: ${movies[i].title}</p>
 			<p>Release: ${movies[i].year}</p>
 			<p>Genres: ${movies[i].genres}</p>
 			<p>Ratings: ${movies[i].ratings}</p>
 			</div>`;
 		}
 		movieDiv.innerHTML += movieBlock;
 	}
 };
})();
movieDatabase.movieHtmlForm();
document.getElementById("movie-btn").addEventListener("click",movieDatabase.userInputForm);
console.log(movieDatabase.movieHtmlForm());


/* Stuff to do
Movie(title, year, genres) CHECK!******
rateMovie(movie, rating)
getTopRatedMovie()
getWorstRatedMovie()
getMoviesThisYear(year)
getMoviesByGenre(genres)
const rateingCalc = movies
.reduce(movies => (prev || 0) + value);
*/