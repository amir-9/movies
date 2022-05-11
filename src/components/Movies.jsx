import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./MoviesTable";
import Pagination from "./Pagination";
import Paginate from "../utils/Paginate";
import Filter from "./Filter";
import FilterByGenre from "../utils/Filter";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPageNumber: 1,
    currentGenre: "All Genres",
    filteredMovies: getMovies(),
  };

  render() {
    const moviesCount = this.state.filteredMovies.length;
    const { pageSize, currentPageNumber, currentGenre, filteredMovies } =
      this.state;

    const movies = Paginate(filteredMovies, pageSize, currentPageNumber);
    return (
      <React.Fragment>
        <p className="mt-3">
          {moviesCount === 0 && "there is no movies in database."}
          {moviesCount !== 0 &&
            `there ${moviesCount === 1 ? "is" : "are"} ${moviesCount} ${
              moviesCount === 1 ? "movie" : "movies"
            } in database.`}
        </p>
        <div className="row">
          <div className="col-3">
            <Filter
              currentGenre={currentGenre}
              onClickHandler={this.filterClickHandler}
            />
          </div>
          <div className="col-9">
            <MoviesTable
              movies={movies}
              onDelete={this.deleteMovieHandler}
              onClick={this.clickHandler}
            />
            <Pagination
              pageSize={pageSize}
              itemsCount={moviesCount}
              currentPageNumber={currentPageNumber}
              onClickHandler={this.paginationClickHandler}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
  deleteMovieHandler = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    const filteredMovies = this.state.filteredMovies.filter(
      (m) => m._id !== movie._id
    );
    this.setState({ filteredMovies });
    // if (this.state.filteredMovies.length % this.state.pageSize === 1) {
    //   this.setState({ currentPageNumber: this.state.currentPageNumber - 1 });
    // }
  };
  clickHandler = (movie) => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index].isLiked = !movies[index].isLiked;
    this.setState({ movies });
  };
  paginationClickHandler = (e, number) => {
    e.preventDefault();
    this.setState({ currentPageNumber: number });
  };
  filterClickHandler = (genre) => {
    this.setState({ currentPageNumber: 1 });
    this.setState({ currentGenre: genre });
    this.setState({
      filteredMovies: FilterByGenre(this.state.movies, genre),
    });
  };
}

export default Movies;
