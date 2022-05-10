import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../common/Like";
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
    if (moviesCount === 0) return <p>there is no movies in database.</p>;
    const movies = Paginate(filteredMovies, pageSize, currentPageNumber);
    return (
      <React.Fragment>
        <p className="mt-3">
          there {moviesCount === 1 ? "is" : "are"} {moviesCount}{" "}
          {moviesCount === 1 ? "movie" : "movies"} in database.
        </p>
        <div className="row">
          <div className="col-3">
            <Filter
              currentGenre={currentGenre}
              onClickHandler={this.filterClickHandler}
            />
          </div>
          <div className="col-9">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => {
                  return (
                    <tr key={movie._id}>
                      <th scope="row">{movie.title}</th>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock} </td>
                      <td>{movie.dailyRentalRate} </td>
                      <td>
                        <Like
                          onClick={() => {
                            this.clickHandler(movie);
                          }}
                          liked={movie.isLiked}
                        />
                      </td>

                      <td>
                        <button
                          id={movie._id}
                          onClick={() => {
                            this.deleteMovieHandler(movie);
                          }}
                          className="btn btn-danger btn-sm"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
  deleteMovieHandler(movie) {
    let movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  }
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
