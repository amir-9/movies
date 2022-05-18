import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = (props) => {
  const { movies, columns, onSort, tableHeaders, orderBy, orderType } = props;
  return (
    <table className="table">
      <TableHeader
        onSort={onSort}
        tableHeaders={tableHeaders}
        orderBy={orderBy}
        orderType={orderType}
      />
      <TableBody items={movies} columns={columns} />
    </table>
  );
};

export default Table;
