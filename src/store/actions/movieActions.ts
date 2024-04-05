import {API_ENDPOINT} from '@env';

import MovieSDK from '../../sdk/MovieSDK';

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

export const fetchRandomMovies =
  (count: number, a: string) => async dispatch => {
    dispatch({type: FETCH_RANDOM_MOVIES_REQUEST});
    try {
      const movieSDK = new MovieSDK(API_ENDPOINT);
      const movies = await movieSDK.fetchRandomMovies(count, a);
      dispatch({type: FETCH_RANDOM_MOVIES_SUCCESS, payload: movies});
    } catch (error) {
      dispatch({type: FETCH_RANDOM_MOVIES_FAILURE, error});
    }
  };

export const searchMovies = (query: string) => async dispatch => {
  dispatch({type: SEARCH_MOVIES_REQUEST});
  try {
    const movieSDK = new MovieSDK(API_ENDPOINT);
    const movies = await movieSDK.searchMovies(query);
    dispatch({type: SEARCH_MOVIES_SUCCESS, payload: movies});
  } catch (error) {
    dispatch({type: SEARCH_MOVIES_FAILURE, error});
  }
};

export const getMovieDetails = (id: string) => async dispatch => {
  dispatch({type: GET_MOVIE_DETAILS_REQUEST});
  try {
    const movieSDK = new MovieSDK(API_ENDPOINT);
    const movie = await movieSDK.getMovieDetails(id);
    dispatch({type: GET_MOVIE_DETAILS_SUCCESS, payload: movie});
  } catch (error) {
    dispatch({type: GET_MOVIE_DETAILS_FAILURE, error});
  }
};
