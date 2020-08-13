import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Button = styled.div`
  border-radius: 50%;
  border: 10px solid ${props => props.theme.colors.spring};
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${props => props.theme.colors.pewter};
  color: black;
  font-size: 2em;
  padding: 15px;
  &:hover {
    background: ${props => props.theme.colors.spring};
    color: ${props => props.theme.colors.pewter};
    border: 10px solid ${props => props.theme.colors.pewter};
  }
`;
