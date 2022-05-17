import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./MoviesTable";
import Pagination from "./Pagination";
import Paginate from "../utils/Paginate";
import Filter from "./Filter";
import FilterByGenre from "../utils/Filter";
import CountMoviesInDatabase from "./CountMoviesInDatabase";
import Sort from "../utils/sort";

class Movies extends Component {
  tableHeaders = [
    { name: "Title", path: "title" },
    { name: "Genre", path: "genre.name" },
    { name: "Stock", path: "numberInStock" },
    { name: "Rate", path: "dailyRentalRate" },
    { name: "" },
    { name: "" },
  ];

  state = {
    allMovies: getMovies(),
    filteredMovies: getMovies(),
    sortedMovies: Sort("", getMovies()),
    currentGenre: "All Genres",
    currentPageNumber: 1,
    pageSize: 4,
    orderBy: "title",
    orderType: "acs",
  };
  // componentDidMount() {
  //   this.setState(
  //     { allMovies: getMovies() },
  //     { filteredMovies: getMovies() },
  //     { sortedMovies: Sort("", getMovies()) }
  //   );
  // }

  render() {
    const moviesCount = this.state.filteredMovies.length;
    const {
      pageSize,
      currentPageNumber,
      currentGenre,
      filteredMovies,
      orderBy,
      orderType,
    } = this.state;
    const sortedMovies = Sort(orderBy, filteredMovies, orderType);
    const movies = Paginate(sortedMovies, pageSize, currentPageNumber);
    return (
      <React.Fragment>
        <CountMoviesInDatabase moviesCount={moviesCount} />
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
              tableHeaders={this.tableHeaders}
              onDelete={this.deleteMovieHandler}
              onClick={this.likeClickHandler}
              onSort={this.sortClickHandler}
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
    const allMovies = this.state.allMovies.filter((m) => m._id !== movie._id);
    this.setState({ allMovies });
    const filteredMovies = this.state.filteredMovies.filter(
      (m) => m._id !== movie._id
    );
    this.setState({ filteredMovies });
    if (
      filteredMovies.length ===
      this.state.pageSize * (this.state.currentPageNumber - 1)
    ) {
      this.setState({ currentPageNumber: this.state.currentPageNumber - 1 });
    }
  };
  likeClickHandler = (movie) => {
    const allMovies = this.state.allMovies;
    const index = allMovies.indexOf(movie);
    allMovies[index].isLiked = !allMovies[index].isLiked;
    this.setState({ allMovies });
  };
  paginationClickHandler = (e, number) => {
    e.preventDefault();
    this.setState({ currentPageNumber: number });
  };
  filterClickHandler = (genre) => {
    this.setState({ currentPageNumber: 1 });
    this.setState({ currentGenre: genre });
    this.setState({
      filteredMovies: FilterByGenre(this.state.allMovies, genre),
    });
  };
  sortClickHandler = (header) => {
    if (header.path === this.state.orderBy) {
      const orderType = this.state.orderType === "acs" ? "desc" : "acs";
      this.setState({ orderType });
    }
    this.setState({ orderBy: header.path });
  };
}

export default Movies;
