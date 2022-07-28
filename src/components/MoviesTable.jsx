import Table from "./table";
import Like from "../common/Like";
import { Link } from "react-router-dom";

const MoviesTable = (props) => {
  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Title" },
    { path: "numberInStock", label: "Title" },
    { path: "dailyRentalRate", label: "Title" },
    {
      key: "like",
      content: (movie) => (
        <Like
          onClick={() => {
            onClick(movie);
          }}
          liked={movie.isLiked}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          id={movie._id}
          onClick={() => {
            onDelete(movie);
          }}
          className="btn btn-danger btn-sm"
        >
          delete
        </button>
      ),
    },
  ];

  const {
    movies,
    onDelete,
    onClick,
    onSort,
    tableHeaders,
    orderBy,
    orderType,
  } = props;
  return (
    <Table
      movies={movies}
      onSort={onSort}
      tableHeaders={tableHeaders}
      orderBy={orderBy}
      orderType={orderType}
      columns={columns}
    />
  );
};

export default MoviesTable;
