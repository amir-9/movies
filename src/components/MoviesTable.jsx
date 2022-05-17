import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
const MoviesTable = (props) => {
  const { movies, onDelete, onClick, onSort, tableHeaders } = props;
  return (
    <table className="table">
      <TableHeader onSort={onSort} tableHeaders={tableHeaders} />
      <TableBody movies={movies} onClick={onClick} onDelete={onDelete} />
    </table>
  );
};

export default MoviesTable;
