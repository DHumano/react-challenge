/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages, imageList } from './thumbnailSlice';
import Header from '../../components/header';
import Filters from '../../components/filters';
import StandardImageList from '../../components/imageList';

const Thumbnail = () => {
  // hot | top | user
  const [section, setSection] = useState('hot');
  // day | week | month | year | all
  const [windows, setWindows] = useState('day');
  // viral | top | time
  const [sort, setSort] = useState('viral');

  const images = useSelector(imageList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages({ section, windows, sort }));
  }, [section, windows, sort]);

  const bodyData = images.length ? <StandardImageList data={images} /> : '';
  return (
    <>
      <Header />
      <Filters
        section={section}
        windows={windows}
        sort={sort}
        handleSection={setSection}
        handleWindows={setWindows}
        handleSort={setSort}
      />
      {bodyData}
    </>
  );
};

export default Thumbnail;
