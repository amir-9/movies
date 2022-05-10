function FilterByGenre(movies, genre) {
  if (genre === "All Genres") return movies;
  const filteredMovies = movies.filter((movie) => movie.genre.name === genre);
  return filteredMovies;
}
export default FilterByGenre;
