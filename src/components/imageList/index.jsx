/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const StandardImageList = (props) => {
  const { data } = props;
  const [results, setResults] = useState([]);

  const imageFormatting = () => {
    const images = [...data];
    const result = images.filter(
      (item) => item.images && item.images[0].type === 'image/jpeg'
    );
    setResults(result);
  };

  useEffect(() => {
    imageFormatting();
  }, [data]);

  return (
    <ImageList
      variant="masonry"
      sx={{ width: 800, height: 'auto' }}
      cols={3}
      gap={8}
    >
      {results.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item.images[0].link}?w=248&fit=crop&auto=format`}
            srcSet={`${item.images[0].link}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default StandardImageList;