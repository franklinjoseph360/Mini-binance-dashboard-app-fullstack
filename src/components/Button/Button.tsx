import React from 'react';
import { StyledButton } from './Button.style';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ children, onClick, $primary, $size = 'MEDIUM'  }) => {
  return <StyledButton onClick={onClick} $primary={$primary} $size={$size}>{children}</StyledButton>;
};

export default Button;
