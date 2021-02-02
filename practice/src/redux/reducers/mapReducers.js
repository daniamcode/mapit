import actionTypes from '../actions/actionTypes';

const routeCalculatorReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case actionTypes.LOAD_MARKER:
      return {
        ...state,
        loadMarker: [...state.loadMarker, action.payload]
      };
    default:
      return state;
  }
}

export default routeCalculatorReducers