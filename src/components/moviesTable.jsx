import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  columns = [
    {path: 'title', name: 'Title'},
    {path: 'genre.name', name: 'Genre'},
    {path: 'numberInStock', name: 'Stock'},
    {path: 'dailyRentalRate', name: 'Rate'},
    {key: 'like'},
    {key: 'delete'}
  ]

  render() {
    const { movies, onLike, onDelete } = this.props;
    return (
      <table className="table table-striped">
        <TableHeader
          columns={this.columns}
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
        />

        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like toggleLike={() => onLike(movie)} liked={movie.liked} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  style={{ cursor: "pointer" }}
                  className="btn btn-danger btn-small"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
