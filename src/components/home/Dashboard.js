import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import Movies from "./Movies";
import Spinner from "../Layout/Spinner";

export class Dashboard extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div class=" very padded text container segment">
        <SearchForm />
        {loading ? <Spinner /> : <Movies/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Dashboard);
