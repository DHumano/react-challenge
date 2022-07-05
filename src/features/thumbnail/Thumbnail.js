/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './Styled';
import { fetchImages, imageList } from './thumbnailSlice';

const Thumbnail = () => {
  const images = useSelector(imageList);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => dispatch(fetchImages(incrementValue))}
        >
          guardar data
        </button>
        <ul>
          {images.map((element) => (
            <li key={element.id}>{element.id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Thumbnail;
