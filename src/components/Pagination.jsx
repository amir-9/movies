import { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

class Pagination extends Component {
  render() {
    const { itemsCount, pageSize, currentPageNumber, onClickHandler } =
      this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pageNumbers = _.range(1, pagesCount + 1);
    if (pagesCount === 1) return null;
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={
                number === currentPageNumber ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                href={number}
                onClick={(e) => onClickHandler(e, number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Pagination;
