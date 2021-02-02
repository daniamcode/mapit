import actionTypes from "./actionTypes";

export const loadMarker = (lat, lng) => {
    return ({
        type: actionTypes.LOAD_MARKER,
        payload: {
            lat,
            lng
        }
    });
}