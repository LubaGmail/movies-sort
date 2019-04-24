import React, { Component } from "react";

class TableHeader extends Component {
  // columns
  // sortColumn
  // onSort

  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const {columns} = this.props;
    return (
      <thead>
        <tr>
            {columns.map(c => 
                <th key={c.path || c.key} onClick={() => this.raiseSort(c.path)}>
                    {c.name}
                </th>
            )}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
  