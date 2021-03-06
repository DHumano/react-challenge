import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages, imageList } from './thumbnailSlice';
import Header from '../../components/header';
import Filters from '../../components/filters';
import StandardImageList from '../../components/imageList';
import Loader from '../../assets/Loader';

const Thumbnail = () => {
  // options: hot | top | user
  const [section, setSection] = useState('hot');
  // options: day | week | month | year | all
  const [windows, setWindows] = useState('day');
  // options: viral | top | time
  const [sort, setSort] = useState('viral');

  const images = useSelector(imageList);
  const status = useSelector((state) => state.thumbnail.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages({ section, windows, sort }));
  }, [section, windows, sort]);

  const bodyData =
    status === 'idle' ? <StandardImageList data={images} /> : <Loader />;
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
