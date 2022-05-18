import React from "react";
class TableHeader extends React.Component {
  sortClickHandler = (header) => {
    this.props.onSort(header);
  };
  sortIcon = (column) => {
    return column.path === this.props.orderBy ? (
      <i className={"fa fa-sort-" + this.props.orderType} />
    ) : null;
  };
  render() {
    const { tableHeaders } = this.props;
    return (
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th
              className={header.path && "clickable"}
              key={index}
              onClick={() => {
                this.sortClickHandler(header);
              }}
              scope="col"
            >
              {header.name + " "}
              {this.sortIcon(header)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
