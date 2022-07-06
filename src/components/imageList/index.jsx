import React, { useMemo } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { theme, gridValues } from '../../helpers/themeHelper';
import * as S from './Styled';
import imageFormatting from '../../utils/imageUtils';

const StandardImageList = (props) => {
  const { data } = props;
  const images = useMemo(() => imageFormatting(data), [data]);

  const dataGrid = images.length ? (
    <S.Wrapper>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: gridValues
          }}
        >
          {images.map((item) => (
            <S.ImageWrapper key={item.images[0].link}>
              <a href={item.images[0].link} target="_blank" rel="noreferrer">
                <ImageListItem key={item}>
                  <img
                    style={{
                      borderRadius: '10px',
                      height: '280px',
                      width: '280px'
                    }}
                    src={`${item.images[0].link}`}
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

  return <S.Container>{dataGrid}</S.Container>;
};

export default StandardImageList;
