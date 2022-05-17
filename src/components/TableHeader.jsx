import React from "react";
class TableHeader extends React.Component {
  sortClickHandler = (header) => {
    this.props.onSort(header);
  };
  render() {
    const { tableHeaders } = this.props;
    return (
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th
              key={index}
              onClick={() => {
                this.sortClickHandler(header);
              }}
              scope="col"
            >
              {header.name}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
