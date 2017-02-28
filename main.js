  //Module pattern - It looks great!
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
 	getMovie:() => {return movies;},

    // Add new movies with push
  addMovie:(movie) => {movies.push(movie);},
/*
  getTopRatedMovie()
  getWorstRatedMovie()

  //Function that will filter old/new movies

  function getMoviesByYear(year) {
    return movieArray.filter(function (title) {
      if (year > otheryear) {
      return title.year == year;
      }
    })
  },
  //Going to become a rating calc, will show before and after amount
  var sumRating = movies.reduce((sum, movies) => sum + movies.ratings, 0)
  var sumRating = 0
  for (var i = 0; i < movies.length; i++) {
    sumRating += movies[i].ratings
  },*/
 	// Adds movie based on input from user
 	userInputForm:() => {
 		var addTitle = document.getElementById("title").value;
 		var addYear = document.getElementById("year").value;
 		var addGenres = document.getElementById("genres").value;
 		var addRatings = document.getElementById("ratings").value;

 		var inputMovie = new movieDatabase.movie(addTitle,addYear,addGenres,addRatings);
 		movieDatabase.addMovie(inputMovie);
 		movieDatabase.movieHtmlForm();
 	},
 	//Generates a <div> and <p>tags to display movies
 	movieHtmlForm: () => {
    var movieBlock = "";
 		var movieDiv = document.getElementsByClassName('movieDiv')[0];
 		for (let i = 0; i < movies.length; i++) {
 			movieBlock += `<div class="movieDiv">
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
//movieDatabase.movieHtmlForm(); Display movies on start up
//button for adding new movies
document.getElementById("movie-btn").addEventListener("click",movieDatabase.userInputForm);



/* Stuff to do
Movie(title, year, genres)******
rateMovie(movie, rating)********
getTopRatedMovie()
getWorstRatedMovie()
getMoviesThisYear(year)******
getMoviesByGenre(genres)

useful: .reduce .filter .map

const ratingCalc = movies
.reduce(movies => (prev || 0) + value);
*/
