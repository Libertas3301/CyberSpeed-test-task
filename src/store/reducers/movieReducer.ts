import {
  FETCH_RANDOM_MOVIES_REQUEST,
  FETCH_RANDOM_MOVIES_SUCCESS,
  FETCH_RANDOM_MOVIES_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
} from '../constants/movieConstants';

const initialState = {
  movies: [],
  randomMovies: [],
  loading: false,
  error: null,
  selectedMovie: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_MOVIES_REQUEST:
    case SEARCH_MOVIES_REQUEST:
    case GET_MOVIE_DETAILS_REQUEST:
      return {...state, loading: true, error: null};

    case FETCH_RANDOM_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        randomMovies: action.payload,
        error: null,
      };

    case SEARCH_MOVIES_SUCCESS:
      return {...state, loading: false, movies: action.payload, error: null};

    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedMovie: action.payload,
        error: null,
      };

    case FETCH_RANDOM_MOVIES_FAILURE:
    case SEARCH_MOVIES_FAILURE:
    case GET_MOVIE_DETAILS_FAILURE:
      return {...state, loading: false, error: action.error};

    default:
      return state;
  }
};

export default movieReducer;
