import { styled } from "styled-components";
import { spacing } from '@styles/variables';

export const IconWrapper = styled.div`
  position: absolute;
  padding: ${spacing.md};
  top: 50%;
  right: 10px;
  display: flex;
  gap: ${spacing.md};
  transform: translateY(-50%);
`;
