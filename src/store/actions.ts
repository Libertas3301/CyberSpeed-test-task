import {ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from './reducers/rootReducer';

export const fetchData: ActionCreator<
  ThunkAction<void, RootState, null, any>
> = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch({type: 'FETCH_SUCCESS', payload: data});
    } catch (error) {
      dispatch({type: 'FETCH_ERROR', payload: error.message});
    }
  };
};
