import React, { Component } from "react";
import { connect } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../action/Action";
import "../sass/home.scss";

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <>
        <div className="searchContainer">
          <h2 class="ui header ">Search For Movies</h2>
          <form action="#" id="searchForm" onSubmit={this.onSubmit}>
            <div class="ui action input focus">
              <input
                type="text"
                placeholder="Search..."
                onChange={this.onChange}
              />

              <button class="ui primary button btnSearch">
                <i class="search icon"></i>
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(SearchForm);
