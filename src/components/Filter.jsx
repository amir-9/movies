import { getGenres } from "../services/fakeGenreService";

function Filter(props) {
  const { onClickHandler, currentGenre } = props;

  const allGenres = [{ name: "All Genres" }, ...getGenres()];
  return (
    <ul className="list-group font-size-14">
      {allGenres.map((genre) => (
        <li
          key={genre.name}
          className={
            currentGenre === genre.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onClickHandler(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
}

export default Filter;
