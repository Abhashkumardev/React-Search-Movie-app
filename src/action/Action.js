import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  DELETE_MOVIE,
  LOADING,
  SORT_MOVIE,
} from "./types";
import axios from "axios";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${text}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data,
      })
    )

    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};

export const deleteMovie = (index) => (dispatch) => {
  dispatch({
    type: DELETE_MOVIE,
    payload: index,
  });
};

export const sortItem = (index) => (dispatch) => {
  dispatch({
    type: SORT_MOVIE,
    payload: index,
  });
};
