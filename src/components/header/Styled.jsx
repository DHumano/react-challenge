import styled from 'styled-components';

const Header = styled.div`
  background: #222;
  top: 0;
  width: 100%;
  color: white;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  padding-left: 5em;
  @media (max-width: 1260px) {
    padding-left: 0;
    justify-content: flex-start;
  }
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
