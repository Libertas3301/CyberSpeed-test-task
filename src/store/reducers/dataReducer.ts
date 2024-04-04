import {combineReducers} from 'redux';

interface DataItem {
  id: number;
  name: string;
}

const initialState: DataItem[] = [];

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.payload;
    case 'FETCH_ERROR':
      // Handle error
      return state;
    default:
      return state;
  }
};

export default dataReducer;
