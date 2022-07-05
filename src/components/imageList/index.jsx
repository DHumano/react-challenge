/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import * as S from './Styled';

const StandardImageList = (props) => {
  const { data } = props;
  const [results, setResults] = useState([]);

  const imageFormatting = () => {
    const images = [...data];
    const result = images.filter(
      // filter to get just jpeg images
      (item) => item.images && item.images[0].type === 'image/jpeg'
    );
    setResults(result);
  };

  useEffect(() => {
    imageFormatting();
  }, [data]);

  const Loading = results.length ? (
    <S.Wrapper>
      <ImageList
        variant="masonry"
        sx={{ width: 900, height: 'auto' }}
        cols={3}
        gap={8}
      >
        {results.map((item) => (
          <S.ImageWrapper>
            <ImageListItem key={item}>
              <img
                style={{ borderRadius: '10px' }}
                src={`${item.images[0].link}?w=248&fit=crop&auto=format`}
                srcSet={`${item.images[0].link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item}
                loading="lazy"
              />
              <ImageListItemBar
                style={{
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px'
                }}
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  />
                }
              />
            </ImageListItem>
          </S.ImageWrapper>
        ))}
      </ImageList>
    </S.Wrapper>
  ) : (
    ''
  );

  return <>{Loading}</>;
};

export default StandardImageList;
