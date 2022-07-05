/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages, imageList } from './thumbnailSlice';
import Header from '../../components/header';
import Filters from '../../components/filters';
import StandardImageList from '../../components/imageList';

const Thumbnail = () => {
  const images = useSelector(imageList);
  const dispatch = useDispatch();

  // hot | top | user
  const [section, setSection] = useState('hot');
  // day | week | month | year | all
  const [windows, setWindows] = useState('day');
  // viral | top | time
  const [sort, setSort] = useState('viral');

  useEffect(() => {
    dispatch(fetchImages());
  }, []); // add parameters here, and useCallback.

  const bodyData = images.length ? <StandardImageList data={images} /> : '';
  return (
    <>
      <Header />
      <Filters />
      {bodyData}
    </>
  );
};

export default Thumbnail;
