import styled from 'styled-components';

const Container = styled.div`
  background-color: rgb(181 154 154 / 12%);
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 1em 1em 1em;
`;

const ImageWrapper = styled.div`
  margin: 5px;
  &:hover {
    transition: 0.2s all;
    opacity: 0.7;
    cursor: pointer;
    margin: 2px;
  }
`;

export { Container, Wrapper, ImageWrapper };
