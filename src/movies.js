// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((movie) => {
    return movie.director
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr.filter((movie) => {
    return movie.director === "Steven Spielberg"
  }).filter((movie) => {
    return movie.genre.includes('Drama')
  }).length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  return arr.reduce((avg, movie)=>{
    if(movie.score === undefined){
      return avg
    } else {
      return avg + Number((movie.score/arr.length).toFixed(2))
    }
  },0)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie)=>{
    return movie.genre.includes("Drama");
  })

  return dramaMovies.reduce((avg, movie)=>{
    if (movie.score === undefined){
      return avg
    } else {
      return avg + Number((movie.score/dramaMovies.length).toFixed(2))
    }
  },0)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let sorted = [...movies].sort((movieA, movieB)=>{
    if (movieA.year === movieB.year) return movieA.title.localeCompare(movieB.title)
    return movieA.year < movieB.year ? -1 : 1
  })

  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // ordenar alfabetico
  let sorted = [...movies].sort((movieA, movieB)=>{
    return movieA.title.localeCompare(movieB.title)
  })

  // tomar solo los primeros 20
  let primeros20 = sorted.slice(0,20)

  // regresar solo los titulos

  return primeros20.map((movie)=>{
    return movie.title
  })
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  // return [...movies].map((movie)=>{
  //   let hours = movie.duration.slice(0,1)
  //   let min = movie.duration.slice(3).slice(0,-3)

  //   let time = hours * 60 + min
    
  //   movie.duration = time
  //   return movie
  // })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
