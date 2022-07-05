/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './Styled';
import { fetchImages, imageList } from './thumbnailSlice';
import ImgCard from '../../components/card';
import ThumbnailGrid from '../../components/thumbnailGrid';

const Thumbnail = () => {
  const images = useSelector(imageList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, []); // add parameters here

  return (
    <div>
      <ThumbnailGrid>
        {images.map((element) => (
          <ImgCard key={element.id}>{element.id}</ImgCard>
        ))}
      </ThumbnailGrid>
    </div>
  );
};

export default Thumbnail;
