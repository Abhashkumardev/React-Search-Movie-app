import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  DELETE_MOVIE,
  LOADING,
  SORT_MOVIE,
} from "../action/types";

const initialState = {
  text: "",
  movies: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };

    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case DELETE_MOVIE:
      console.log(state);
      return {
        ...state,
        movies: {
          ...state.movies,
          data: state.movies.data.filter(
            (item) => item.imdbID !== action.payload
          ),
        },
      };

    case SORT_MOVIE:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: state.movies.data.sort((a, b) => (a.Title > b.Title ? 1 : -1)),
        },
      };
    default:
      return state;
  }
}
