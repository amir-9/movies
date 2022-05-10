import { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
class Filter extends Component {
  // state = {  }

  render() {
    const { movies, onClickHandler, currentGenre } = this.props;
    const allGenres = getGenres();
    console.log(allGenres);
    return (
      <ul className="list-group font-size-14">
        <li
          className={
            currentGenre === "All"
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onClickHandler("All")}
        >
          All Genre
        </li>
        {allGenres.map((genre) => (
          <li
            key={genre._id}
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
}

export default Filter;
