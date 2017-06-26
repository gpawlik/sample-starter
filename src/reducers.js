import { combineReducers } from 'redux-immutable';

import fooReducer from './containers/Foo/reducer';

export default combineReducers({
  fooDomain: fooReducer
});
