import { styled } from "styled-components";
import { colors, fontSize, spacing } from '@styles/variables';

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${colors.font.primary};
  font-size: ${fontSize.md};
  cursor: pointer;
  padding: ${spacing.none};

  &:hover {
    color: ${colors.font.secondary};
  }

  &:focus {
    outline: none;
  }
`;
