/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages, imageList } from './thumbnailSlice';
import Header from '../../components/header';
import StandardImageList from '../../components/imageList';

const Thumbnail = () => {
  const images = useSelector(imageList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, []); // add parameters here, and useCallback.

  const bodyData = images.length ? <StandardImageList data={images} /> : '';
  return (
    <>
      <Header />
      {bodyData}
    </>
  );
};

export default Thumbnail;
