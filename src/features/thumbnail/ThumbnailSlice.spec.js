/* eslint-disable no-undef */
import thumbnailReducer from './thumbnailSlice';

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(thumbnailReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
      status: 'idle'
    });
  });
});
