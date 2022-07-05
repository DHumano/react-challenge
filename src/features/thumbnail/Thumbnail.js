/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './Styled';
import { fetchImages, imageList } from './thumbnailSlice';

const Thumbnail = () => {
  const count = useSelector(imageList);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button onClick={() => dispatch(fetchImages(incrementValue))}>
          guardar data
        </button>
      </div>
    </div>
  );
};

export default Thumbnail;
