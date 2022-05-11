const CountMoviesInDatabase = (props) => {
  const {moviesCount}=props;
  return (
    <p className="mt-3">
      {moviesCount === 0 && "there is no movies in database."}
      {moviesCount !== 0 &&
        `there ${moviesCount === 1 ? "is" : "are"} ${moviesCount} ${
          moviesCount === 1 ? "movie" : "movies"
        } in database.`}
    </p>
  );
};

export default CountMoviesInDatabase;
