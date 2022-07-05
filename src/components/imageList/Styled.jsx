import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgb(255 255 255 / 50%);
  padding-left: 1.1em;
  padding-right: 1.1em;
`;

const ImageWrapper = styled.div`
  &:hover {
    transition: 0.2s all;
    opacity: 0.7;
    cursor: pointer;
  }
`;

export { Wrapper, ImageWrapper };
