import Like from "../common/Like";
const MoviesTable = (props) => {
  const { movies, onDelete, onClick, onSort, tableHeaders } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th
              key={index}
              onClick={() => {
                onSort(header);
              }}
              scope="col"
            >
              {header.name}
            </th>
          ))}
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
    </table>
  );
};

export default MoviesTable;
