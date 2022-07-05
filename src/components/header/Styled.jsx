import styled from 'styled-components';

const Header = styled.div`
  background: #222;
  top: 0;
  width: 100%;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

const Text = styled.p`
  &:hover {
    transition: 0.2s all;
    opacity: 0.7;
    cursor: pointer;
  }
  margin: 20px;
`;

export { Header, Text };
