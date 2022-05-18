import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item._id}>
              {columns.map((column, index) => {
                return <td key={index}>{this.renderCell(item, column)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
