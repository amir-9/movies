import React, { Component } from "react";
import Like from "../common/Like";

class TableBody extends Component {
  // state = {  }
  render() {
    const { onClick, onDelete, movies } = this.props;
    return (
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
                    onClick(movie);
                  }}
                  liked={movie.isLiked}
                />
              </td>

              <td>
                <button
                  id={movie._id}
                  onClick={() => {
                    onDelete(movie);
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
    );
  }
}

export default TableBody;
