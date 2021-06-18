import React, { Component } from "react";
import { connect } from "react-redux";
import Delete from "../Layout/delete.png";
import { deleteMovie } from "../../action/Action";
import { sortItem } from "../../action/Action";

export class Movies extends Component {
  render() {
    const { movies } = this.props;
    let content = [];

    content =
      movies != null ? (
        <table className="ui  celled table tableContainer">
          <thead>
            <tr>
              <th>
                Title{" "}
                <i
                  className="sort icon"
                  onClick={() => this.props.sortItem()}
                ></i>
              </th>
              <th>
                Year{" "}
                <i
                  className="sort icon"
                  onClick={() => this.props.sortItem()}
                ></i>{" "}
              </th>
              <th>
                ImdbID{" "}
                <i
                  className="sort icon"
                  onClick={() => this.props.sortItem()}
                ></i>{" "}
              </th>
              <th>Action</th>
            </tr>
          </thead>
          {movies.data &&
            movies.data.map((movie, index) => (
              <tbody>
                <tr>
                  <td data-label="Title">{movie.Title} </td>
                  <td data-label="Year">{movie.Year}</td>
                  <td data-label="ImdbID">{movie.imdbID}</td>

                  <td>
                    <img
                      src={Delete}
                      key={movie.Title}
                      onClick={() => this.props.deleteMovie(movie.imdbID)}
                      alt="movie"
                    />
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      ) : null;
    return <div className="row">{content}</div>;
  }
}
const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (index) => dispatch(deleteMovie(index)),
    sortItem: (index) => dispatch(sortItem(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
