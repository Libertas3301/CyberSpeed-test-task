import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import otherReducer from './otherReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  other: otherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
