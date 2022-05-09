import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../common/Like";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    let moviesCount = this.state.movies.length;
    if (moviesCount === 0) return <p>there is no movies in database.</p>;
    return (
      <React.Fragment>
        <p>
          there {moviesCount === 1 ? "is" : "are"} {moviesCount}{" "}
          {moviesCount === 1 ? "movie" : "movies"} in database.
        </p>
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
            {this.state.movies.map((movie) => {
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
}

export default Movies;
