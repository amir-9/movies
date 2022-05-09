import _ from "lodash";

function Paginate(movies, pageSize, pageNumber) {
  const startIndex = pageSize * (pageNumber - 1);
  const endIndex = startIndex + pageSize;
  let pageMovies = _(movies).slice(startIndex, endIndex).value();
  return pageMovies;
}

export default Paginate;
