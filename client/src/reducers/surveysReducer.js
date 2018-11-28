import { FETCH_SURVEYS } from '../actions/types';
// use a curly bracket to get a specific type from the types,
// as ../actions/types export more than one type

//by defalut state returns an empty array
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
