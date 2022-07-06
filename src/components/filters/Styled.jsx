import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  &:after {
    content: '';
    min-width: 135px;
  }
`;

const Text = styled.div``;

export { Wrapper, Text };
