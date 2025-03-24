import styled from 'styled-components';
import { ButtonStyleProps } from './Button.types';

export const StyledButton = styled.button<ButtonStyleProps>`
  background-color: ${(props) => (props.$primary ? '#007bff' : '#dc3545' )};
  border-color: ${(props) => (props.$primary ? '#007bff' : '#dc3545' )};
  color: ${(props) => (props.$primary ? '#ffffff' : '#fefeff')};
  font-size: ${(props) => {
    switch (props.$size) {
      case 'SMALL': return '12px';
      case 'MEDIUM': return '15px';
      default: return '18px';
    }
  }};
  font-weight: bold;
  border: none;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  border-radius: 40px;

  &:hover {
    background-color: ${(props) => (props.$primary ? '#0069d9' : '#c82333' )};
    border-color: ${(props) => (props.$primary ? '#0062cc' : '#bd2130' )};
  }
`;
