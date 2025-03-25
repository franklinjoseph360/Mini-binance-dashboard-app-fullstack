import styled from "styled-components";
import { colors, spacing, fontSize } from '@styles/variables';

export const TextInput = styled.input`
  width: 100%;
  padding: ${spacing.md};
  font-size: ${fontSize.md};
  border-radius: 8px;
  background-color: ${colors.background.highlight};
  color: ${colors.font.primary};
  border: 1px solid ${colors.background.highlight};

  &:focus {
    border-color: ${colors.background.secondary};
    outline: none;
  }

  &::placeholder {
    color: ${colors.font.secondary};
  }

  @media (max-width: 600px) {
    font-size: ${fontSize.xs};
    padding: ${spacing.md} ${spacing.lg} ${spacing.md} ${spacing.sm};
  }

  @media (max-width: 1024px) {
    font-size: ${fontSize.sm};
    padding: ${spacing.md} ${spacing.lg} ${spacing.md} ${spacing.sm};
  }
`;
