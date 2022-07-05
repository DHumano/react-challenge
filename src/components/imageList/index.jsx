import React, { useState, useEffect } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { theme, gridValues } from '../../helpers/themeHelper';
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

  const dataGrid = results.length ? (
    <S.Wrapper>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: gridValues
          }}
        >
          {results.map((item) => (
            <S.ImageWrapper>
              <a href={item.images[0].link} target="_blank" rel="noreferrer">
                <ImageListItem key={item}>
                  <img
                    style={{ borderRadius: '10px', maxHeight: '400px' }}
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
              </a>
            </S.ImageWrapper>
          ))}
        </Box>
      </ThemeProvider>
    </S.Wrapper>
  ) : (
    ''
  );

  return <div>{dataGrid}</div>;
};

export default StandardImageList;
