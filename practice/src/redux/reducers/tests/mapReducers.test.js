import mapReducers from '../mapReducers';
import { initialState } from '../../configureStore';
import actionTypes from '../../actions/actionTypes';

describe('map reducer', () => {
  it('should handle no initial state and no action', () => {
    expect(mapReducers()).toEqual({});
  });

  it('should handle initial state and no action', () => {
    expect(mapReducers(initialState.mapReducer)).toEqual({loadMarker:[]});
  });

  it('should handle LOAD_MARKER', () => {
    let result = {loadMarker: [{lat: 1, lng: 41}]}
    expect(
      mapReducers(
        {
          ...initialState.mapReducer,
        },
        {
          type: actionTypes.LOAD_MARKER,
          payload: {lat: 1, lng: 41}
        },
      ),
    ).toEqual(
        result
    );
  })

  it('should handle default', () => {
    expect(
      mapReducers(
        {
          ...initialState.mapReducer,
        }
      ),
    ).toEqual({
      ...initialState.mapReducer
    });
  })
})