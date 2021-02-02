import {
    loadMarker
} from "../mapActions";

describe('loadMarker', () => {
    it('returns expected value', () => {
        const result = loadMarker(1, 41);

        expect(result.payload).toEqual({
            lat: 1,
            lng: 41
        })
    })
})