function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // create a new set for movies seen so far
  const moviesSeen = new Set();

  // iterate through the movies, create a new Set for each movie and check if there is a second movie in the movieLengths array that is equal to the remaining flight length
  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const secondMovieLength = flightLength - firstMovieLength;
    if (moviesSeen.has(secondMovieLength)) {
      return true;
    }

    // avoid adding the same movie twice by adding a movie to the set after checking whether the second movie is contained in the set
    moviesSeen.add(firstMovieLength);
  }

  // no two movies match the flightLength
  return false;
}

const moviesArray = [10, 20, 30, 40];
const flightLength = 70;

console.log(canTwoMoviesFillFlight(moviesArray, flightLength));
