import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgb(181 154 154 / 12%);
  padding: 2em;
`;

const ImageWrapper = styled.div`
  margin: 10px;
  &:hover {
    transition: 0.2s all;
    opacity: 0.7;
    cursor: pointer;
    margin: 5px;
  }
`;

export { Wrapper, ImageWrapper };
