  /*Module pattern - Looks great, easy to follow
                                                */
  const movieDatabase = (() => {
  let movies = [
    {
      title: 'Léon: The Professional',
      year:1994,
      genres: ['Crime ','Drama ','Thriller '],
      ratings: [8]
    },
    {
      title: 'The Usual Suspects',
      year: 1995,
      genres: ['Crime ','Drama ','Mystery '],
      ratings: [7]
    },
    {
      title:'Fight Club',
      year:1999,
      genres:['Action ','Thriller ','Drama '],
      ratings:[10]
    },
    {
      title:'V for Vendetta',
      year:2005,
      genres:['Action ','Drama ','Thriller '],
      ratings:[8]

    },
    {
      title:'Pulp Fiction',
      year:1994,
      genres:['Crime ','Drama '],
      ratings:[9]
    },
    {
      title:'The Dark Knight',
      year:2008,
      genres:['Action ','Crime ','Drama '],
      ratings:[8]
    }
  ];

  return {
    //The movie constructor
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

  //Takes new arguments, name & rating, filters the
//given name of the movie and compare. 
  userRating: function(title, rating){

    return movies.filter((movie) =>{
      return movie.title == title;
      //re-mapping the array with ratings
    }).map(function(movie){
      return movie.ratings.push(rating);
        return ratings.rating;
    },0);
  },
//movieDatabase.userRating(name, rate));

//filters out movies by the given year
//you send it in with filter and a map function
//and in return we get the names of the movies.
  getMoviesByYear: function(year) {

    return movies.filter((movie) => {
      return title.year == year;
    //re-mapping the array with title
  }).map(function(movie){
    return movie.title;
    },0);
},
//console.log(movieDatabase.getMoviesByYear(1999));

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
/*Generates a <div> and <p>tags to display movies, 
looping through the array movies*/
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
//button for adding new movies
document.getElementById("movie-btn").addEventListener("click",movieDatabase.userInputForm);
      /**************Helpful code**************/
//movieDatabase.movieHtmlForm(); //Display movies on start up
//console.log(movieDatabase.getMoviesByYear(1999));
//movieDatabase.userRating(name, rate));

/*getTopRatedMovie()
getWorstRatedMovie()
    //add & remove
    function removeGenres(para1, para2) {

    };

    function getMoviesByGenre(genres) {

    };

