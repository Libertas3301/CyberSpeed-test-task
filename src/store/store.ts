import {configureStore, Action} from '@reduxjs/toolkit';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import rootReducer, {RootState} from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(thunk as ThunkMiddleware<RootState, Action>),
});

export default store;
