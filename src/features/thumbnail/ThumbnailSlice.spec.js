/* eslint-disable no-undef */
import thumbnailReducer, { increment } from './thumbnailSlice';

describe('counter reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle'
  };
  it('should handle initial state', () => {
    expect(thumbnailReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle'
    });
  });

  it('should handle increment', () => {
    const actual = thumbnailReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });
});
